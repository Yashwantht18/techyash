let selectedPlan = "";
let isProcessing = false;
        function showProcessing() {
            isProcessing = true;
            document.getElementById("processing-box").style.display = "block";
            setTimeout(function() {
                if(!isProcessing){
                    return;
                }
                document.getElementById("processing-box").style.display = "none";
                document.getElementById("payment-gateway").style.display = "block";
            }, 3000);
        }

        function completePayment() {
            isProcessing = false;
            document.getElementById("payment-gateway").style.display = "none";
            document.getElementById("success-message").style.display = "block";
            console.log(selectedPlan);
            document.getElementById(selectedPlan + "-button").innerText = "Activated";
            document.getElementById(selectedPlan + "-button").style.backgroundColor = "green";
            document.getElementById(selectedPlan + "-button").style.border = "green";
            document.getElementById(selectedPlan + "-button").style.color = "white";
            setTimeout(function() {
                document.getElementById("success-message").style.display = "none";
            }, 2000); 
        }
        function cancelPayment() {
            isProcessing = false;
            selectedPlan = "";
            document.getElementById("payment-gateway").style.display = "none";
            document.getElementById("backdrop").style.display = "none";
        }
        function displayMessage(messageId) {
            document.getElementById(messageId).style.display = "block";
            setTimeout(function() {
                document.getElementById(messageId).style.display = "none";
            }, 2000);
        }

        function selectPlan(plan) {
            if (selectedPlan && selectedPlan !== plan) {
                displayMessage("already-activated-message");
            } else if (selectedPlan === plan) {
                displayMessage("already-activated-message");
            } else {
                selectedPlan = plan;
                showProcessing();
            }
        }

