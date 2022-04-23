function onNotwendig()
        {
        
            var checkbox=document.getElementById("notwendig");
            if (checkbox.checked==true)
            {
                chrome.storage.local.set({"notwendigwert": 1});
            }
            else 
            {
                chrome.storage.local.set({"notwendigwert": 0});
            } 
                chrome.storage.local.get("notwendigwert", function(res) {
                  console.log(res)
            });
        }
        var checkboxNotwendig = document.getElementById("notwendig");
        checkboxNotwendig.addEventListener('click', onNotwendig);