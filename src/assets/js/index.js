    function fileUpload() {
        var mark = document.orginForm.mark.value;
        var file = document.orginForm.file.files[0];
        console.log('file', file);
        var fm = new FormData();
        fm.append('mark', mark);
        fm.append('file', file);
        console.log(fm);
        $.ajax(
            {
                url: 'http://114.141.178.23:40214/GetWordDemo/doUpload',
                type: 'POST',
                data: fm,
                contentType: false, //禁止设置请求类型
                processData: false, //禁止jquery对DAta数据的处理,默认会处理
                //禁止的原因是,FormData已经帮我们做了处理
                success: function (result) {
                    console.log(result);
                    var orginResult1 = result.replace(/[\'\"\\\/\b\f\n\r\t]/g, '');
                    var orginResult = orginResult1.split('n').join('');
                    orginText = orginResult;
                    $("#orginReturnResult").html(orginResult);
                    var str = '';
                    for (var i = 0; i < orginResult.length; i++) {
                        // str += '<span>' + arrContent[i] + '</span>' + '<span>' + '_' + i +'#'+'</span>';
                        str += '<span>' + orginResult[i] + '</span>';
                    }
                    $("#fileContent").html(str);
                }
            }
        );
    }
    function myformatter(date){
        var y = date.getFullYear();
        var m = date.getMonth()+1;
        var d = date.getDate();
        return y+'-'+(m<10?('0'+m):m)+'-'+(d<10?('0'+d):d);
    }
    function myparser(s){
        if (!s) return new Date();
        var ss = (s.split('-'));
        var y = parseInt(ss[0],10);
        var m = parseInt(ss[1],10);
        var d = parseInt(ss[2],10);
        if (!isNaN(y) && !isNaN(m) && !isNaN(d)){
            return new Date(y,m-1,d);
        } else {
            return new Date();
        }
    }
    function onSelect(date){
        $('#result').text(date);
    }
