var powerbutton=document.getElementById("powerbutton");
chrome.storage.local.get("wert", function(res) {
    if(res.wert == 1) 
    {
        powerbutton.checked = true;
    }
    else 
    {
        powerbutton.checked = false;
    }
});


function onPower()
        {
        
            var checkbox=document.getElementById("powerbutton");
            if (checkbox.checked==true)
            {
                chrome.storage.local.set({"wert": 1});
            }
            else 
            {
                chrome.storage.local.set({"wert": 0});
            } 
        }

var checkboxNotwendig = document.getElementById("powerbutton");
checkboxNotwendig.addEventListener('click', onPower);