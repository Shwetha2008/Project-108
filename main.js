function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/xIrN5lfGQ/model.json", modelReady);

}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);

    random_number_r = Math.floor(Math.random()*255) + 1;
    random_number_g = Math.floor(Math.random()*255) + 1;
    random_number_b = Math.floor(Math.random()*255) + 1;

    document.getElementById("result_label").innerHTML = "I can hear - " + results[0].label;
    document.getElementById("result_confidence").innerHTML = "Accuracy - " + (results[0].confidence * 100).toFixed(2) + "%";
    document.getElementById("result_label").style.color = "rgb(" +random_number_r + "," + random_number_g + "," + random_number_b +")";
    document.getElementById("result_confidence").style.color = "rgb(" +random_number_r + "," + random_number_g + "," + random_number_b +")";

    img = document.getElementById("animal_img");

    if (results[0].label == "Meowing")
    {
        img.src = "cat.gif";
    }
    else if (results[0].label == "Mooing")
    {
        img.src = "cow.gif";       
    }
    else if (results[0].label == "Roaring")
    {
        img.src = "roaring-lion.gif";  
    }
    else if (results[0].label == "Barking")
    {
        img.src = "dog.gif";      
    }
    else 
    {
        img.src = "listen.gif";
}
    }

}