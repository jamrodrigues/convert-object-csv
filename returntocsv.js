module.exports = returntocsv;

function returntocsv(prefix_name, res_body, set_header) {
    // var prefixName = prefix_name;
    var csvFile, csvLink, fileName, header, body, csv = [];

    var exportCSV = {
        setFilename: setFilename,
        setHeader: setHeader,
        setBody: setBody,
        doCsv: doCsv,
        sortByKeys: sortByKeys
    };

    return exportCSV;

    function setFilename(prefix_name) {
        // fileName = data;
        fileName = prefix_name + '_' + ( new Date() ).toISOString().slice(0,22).replace(/-/g,"") + '.csv'
    }

    function setHeader(set_header) {
        header = set_header;
    }

    function setBody(res_body) {
        var body = res_body.map(function (responseCsv){
            return responseCsv;
        });
        // body = data;
        // var body =  vm.dataCsv.map(function (responseCsv) {
        //     return responseCsv;
        // });
    }

    doCsv();

    function doCsv() {
        if(angular.isDefined(body)){
            csv = _convertDataToCsv(_formatData());
            _download();
        }
    }

    function _formatData() {
        var keys = [],
            dataObj = [];
        keys = Object.keys(header);
        // push header
        dataObj.push(header);
        // push body
        body.forEach(function (val, key) {
            val.Title = val.Title.replace(/;/g, '').replace(/\r\n/g, '').replace(/\n/g, '');
            val.Description = val.Description.replace(/;/g, '').replace(/\r\n/g, '').replace(/\n/g, '');
            val.Scope_Name = val.Scope_Name.replace(/;/g, '').replace(/\r\n/g, '').replace(/\n/g, '');
            val.BusinessCase_EffortCostOfImplementation = val.BusinessCase_EffortCostOfImplementation.replace(/\r\n/g, '').replace(/\n/g, '');
            val.BusinessCase_Rational = val.BusinessCase_Rational.replace(/;/g, '').replace(/\r\n/g, '').replace(/\n/g, '');
            
            dataObj.push(val);
        });
        // return data csv
        return exportCSV.sortByKeys(dataObj, keys);
    }

    function _convertDataToCsv(objArray) {
        var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
        var str = '';
        for (var i = 0; i < array.length; i++) {
            var line = '';
            for (var index in array[i]) {
                if (line != '') line += ';';
                line += array[i][index];
            }
            str += line + '\r\n';
        }
        return str;
    }

    function sortByKeys(data, keys) {
        var result = [];
        data.forEach(function (val, key) {
            var dataObj = {};
            keys.forEach(function (v) {
                dataObj[v] = val[v];
            });
            result.push(dataObj);
        });
        return result;
    }

    function _download() {
        csvFile = new Blob(["\ufeff", csv], {
            type: "text/csv"
        });
        csvLink = document.createElement("a");
        csvLink.download = fileName;
        csvLink.href = window.URL.createObjectURL(csvFile);
        csvLink.style.display = "none";
        document.body.appendChild(csvLink);
        csvLink.click();
    }

}