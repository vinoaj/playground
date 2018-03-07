<script charset="utf-8" type="text/javascript" src="//js.hsforms.net/forms/v2.js"></script>
<script>
    hbspt.forms.create({
        portalId: "4367112",
        formId: "22ebfa6a-3071-47d9-9978-8828d4d354ce",
        onFormReady: function($form) {
            initForm();
        }
    });
    function initForm() {
        console.log('form loaded 2');
        var inputs = document.getElementsByTagName('input');
        for (var i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('click', recordInteraction, false);
        }
    }
    function recordInteraction(event) {
        console.log("Field name: ", this.name);
    }
</script>