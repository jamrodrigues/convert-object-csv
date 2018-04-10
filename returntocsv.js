module.exports = returntocsv;

function returntocsv(prefix_name, body, header) {
    // var prefixName = prefix_name;
    var csvFile, csvLink, fileName,  csv = [];

    fileName = prefix_name + '_' + ( new Date() ).toISOString().slice(0,22).replace(/-/g,"") + '.csv'
    
    doCsv();

    function doCsv() {
        if(body !== undefined){
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
            dataObj.push(val);
        });
        // return data csv
        return sortByKeys(dataObj, keys);
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