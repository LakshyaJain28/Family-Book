var images =
["father.JPG","Mother.JPG", "Me.JPG","Sister.JPG"];
var names=["Sourav Jain","Anshika Jain","Lakshya Jain","Akshita Jain"];
var i=0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4;
    if (i > numbers_of_family_member_in_array)
    {
        i=0;
    }
    var updateimage= images[i];
    var updatename= names[i];
    document.getElementById("family_member_image").src=updateimage;
    document.getElementById("family_member_name").innerHTML=updatename;
}