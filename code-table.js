var SPREADSHEET_ID_AND_TAB =
	'1AZTTBz_Rh4KP1yDHaGJsmyysrJOMCMYgWQB6duuzoD4/cookn';

$(document).ready(function () {
  $.getJSON(
    'https://opensheet.elk.sh/' + SPREADSHEET_ID_AND_TAB,
    function (data) {
      console.log(data);

      data.forEach(function (entry, index) {
        console.log(entry);

        if (index == 0) return;
        let header = $(
					`<h5 data-filter-type="` +
						entry.BlogName +
						`">` +
						entry.BlogName +
						`</h5da
				ta-filter-type=>`
				).appendTo('#blog-title');

        let section = $(
					`<article data-filter-type="` +
						entry.DishName +
						`" class="blog--item"><h3>` +
						entry.DishName +
						`</h3><span><p class="entry--who">` +
						entry.Who +
						`</p><p class="entry--date">` +
						entry.Date +
						`</p><p class="entry--tag">Tags: ` +
						entry.Genre +
						`</p></span><p class="entry--description">` +
						entry.Description +
						`</p><p>` +
						entry.Notes +
						`</p>
				<img src="imgs/` +
						entry.Image +
						`" /></article>`
				).appendTo('#cook-entry');
      });
    }
  );
})
