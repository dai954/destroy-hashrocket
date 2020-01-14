$(function(){
  console.log("ok")
  
  $("#the_html_body").on("keyup", function() {
    
    input = $("#the_html_body").val()

      // 先シンボル型
      let output1 = input.replace(/:(\w+)\s{0,1}=>/g, '$1:')
      // 文字列型
      let output2 = output1.replace(/\"(\w+)\"\s{0,1}=>/g, '$1:')
      // 半角英数字と記号(先シンボル型) 最後に半角スペースがこないように
      let output3 = output2.replace(/:([ -~]+[!-~])\s{0,1}=>/g, '$1:')
      // 半角英数字と記号(文字列型) 最後に半角スペースがこないように
      let output4 = output3.replace(/\"([ -~]+[!-~])\"\s{0,1}=>/g, '$1:')


      let list = $("#symbol-output");
      list.append(output4)
  })


  })