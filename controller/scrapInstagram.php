<?php
//function crawl page (reading html content)
function crawl_page($url, $depth = 5)
{
    //see content page - available
    static $seen = array();
    if (isset($seen[$url]) || $depth === 0) {
        return;
    }
    $seen[$url] = true;

    //create a new DOM html document
    $dom = new DOMDocument('1.0');
    //Load html content from url to merge to the new DOM
    $dom->loadHTMLFile($url);
    //GET ELEMENTS HTML
    //get script that contents all info profile showed on instagram
    $script = $dom->getElementsByTagName('script');
    $content_profile = $script[2]->nodeValue;
    //Extract string to convert a JSON decode document
    $stringArray = substr($content_profile, 21,-1);
    $parseContent = json_decode($stringArray);

    //Management content profile
    //get all medias feed profile
    $feedmedia = $parseContent->entry_data->ProfilePage[0]->user->media->nodes;

    return $feedmedia;
}
$result = crawl_page("https://www.instagram.com/qincha.bar/", 2);
echo json_encode($result);
?>
