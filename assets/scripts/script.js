// function rand(min, max) {
//     return Math.random() * (max - min) + min;
// }

$(function () {
    const ARTICLES = `
    <a href="monsters.html"><div>
        <img src="./assets/images/monsters_thumbnail.png">
    </div></a>
    <a href="stages.html"><div>
        <img src="./assets/images/stages_thumbnail.png">
    </div></a>
    <a href="quests.html"><div>
        <img src="./assets/images/quests_thumbnail.png">
    </div></a>
    <a href="jobs.html"><div>
        <img src="./assets/images/jobs_thumbnail.png">
    </div></a>
    <a href="faq.html"><div>
        <img src="./assets/images/faq_thumbnail.png">
    </div></a>
    `;
    const LAST_UPDATED = "<br><br><span style=\"color:#d0eaff;\">最終更新日: 2022/12/29</span>";

    $("#main").append(ARTICLES);
    $("#last-updated").append(LAST_UPDATED);
    $("#top_move").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, "300");
    });
});