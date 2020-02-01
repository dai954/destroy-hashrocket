$(function(){
  
  $("#the_html_body").on("input", function() {
    
    input = $("#the_html_body").val()

      // 先シンボル型
      let output_symbolType = input.replace(/:([^ ]+)\s{0,}=>/g, '$1:')
      // 文字列型
      let output_stringType1 = output_symbolType.replace(/\"([^\"]+[^ ])\s{0,}\"\s{0,}=>/g, '\"$1\":')
      let output_stringType2 = output_stringType1.replace(/\'([^\']+[^ ])\s{0,}\'\s{0,}=>/g, '\'$1\':')
      let list = $("#symbol-output");
      list.append(output_stringType2);
  });
});


