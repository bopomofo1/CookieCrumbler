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

function onLeistung()
        {
        
            var checkbox=document.getElementById("leistung");
            if (checkbox.checked==true)
            {
                chrome.storage.local.set({"leistungwert": 1});
            }
            else 
            {
                chrome.storage.local.set({"leistungwert": 0});
            } 
                chrome.storage.local.get("leistungwert", function(res) {
                  console.log(res)
            });
        }
        var checkboxLeistung = document.getElementById("leistung");
        checkboxLeistung.addEventListener('click', onLeistung);

function onFunktions()
        {
        
            var checkbox=document.getElementById("funktions");
            if (checkbox.checked==true)
            {
                chrome.storage.local.set({"funktionswert": 1});
            }
            else 
            {
                chrome.storage.local.set({"funktionswert": 0});
            } 
                chrome.storage.local.get("funktionswert", function(res) {
                  console.log(res)
            });
        }
        var checkboxFunktions = document.getElementById("funktions");
        checkboxFunktions.addEventListener('click', onFunktions);

function onWerbung()
        {
        
            var checkbox=document.getElementById("werbung");
            if (checkbox.checked==true)
            {
                chrome.storage.local.set({"werbungwert": 1});
            }
            else 
            {
                chrome.storage.local.set({"werbungwert": 0});
            } 
                chrome.storage.local.get("werbungwert", function(res) {
                  console.log(res)
            });
        }
        var checkboxWerbung = document.getElementById("werbung");
        checkboxWerbung.addEventListener('click', onWerbung);