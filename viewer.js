$(document).ready(function () {
  function search(keyword) {

    $(".results").html("");

    let url = "https://en.wikipedia.org/w/api.php?format=json&action=query&generator=search&gsrnamespace=0&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1&exlimit=max&callback=?&gsrsearch=" + keyword;
    console.log(url);
    $.getJSON(url, function (data) {
      let res = data.query.pages;
      console.log(res);
      for (var k in res) {
        let curlid = k;
        let title = res[k].title;
        let extract = res[k].extract;
        console.log(curlid, title, extract);
        let text = "<div class='result-list'>" +
          "<div class=''><a href='https://en.wikipedia.org/?curid=" + curlid + "' target='_blank'>" + title + "</a></div>" +
          "<div class=''><p>" + extract + "</p></div>"

        "</div>";
        $(".results").append(text);
      }
    });
  }

  $(".search").click(function () {
    console.log($(".query").val());
    let q = $(".query").val();
    if (q) {
      search(q);
    }

  });
});