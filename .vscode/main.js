let arr = [1, 4, 6, "ahmed", "omar"]
for (let i = 0; i < arr.length; i++)
{
    if (typeof (arr[i]) == "string") {
        console.log(arr[i]);
    }
}