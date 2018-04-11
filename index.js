/**
 * Function convertObjectCsv
 * 
 * @param {any} prefix_name 
 * @param {any} body 
 * @param {any} header 
 */
function convertObjectCsv(prefix_name, body, header, separator) {
    var csvFile, csvLink, fileName,  csv = [];
    //Gera o nome do arquivo final com seu prefixo
    fileName = prefix_name + '_' + ( new Date() ).toISOString().slice(0,22).replace(/-/g,"") + '.csv'
    
    makecsv();

    function makecsv() {
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
                if (line != '') line += separator;
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

        if (window.navigator && window.navigator.msSaveOrOpenBlob) { // for IE
            window.navigator.msSaveOrOpenBlob(csvFile, fileName);
        } else {
            csvLink = document.createElement("a");
            csvLink.download = fileName;
            csvLink.href = window.URL.createObjectURL(csvFile);
            csvLink.style.display = "none";
            document.body.appendChild(csvLink);
            csvLink.click();
        }
    }
}