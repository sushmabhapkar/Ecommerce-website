const form=document.getElementById('form');
const sprice=document.getElementById('sprice');
const pname=document.getElementById('pname');

const list=document.getElementById('list');

form.addEventListener('submit',AddProduct);

window.addEventListener('DOMContentLoaded',()=>{

    axios.get("https://crudcrud.com/api/c165d025991248cda5ca501fcb171412/SellingData")
    .then((Response)=>
    {
       for(let i=0;i<Response.data.length;i++)
       {
        showData(Response.data[i]);
       }
    })
    .catch((error)=>
    {
        console.log(error);
    });

});

function AddProduct(e)
{
    e.preventDefault();

    const Sprice=sprice.value;
    const Pname=pname.value;

    const data={
         
        Sprice,
        Pname
 
    };
    

    axios.post("https://crudcrud.com/api/c165d025991248cda5ca501fcb171412/SellingData",data)
         .then((Response)=>
         {
            showData(Response.data);
            console.log(Response);
         })
         .catch((error)=>
         {
            console.log(error);
         });



}

function showData(data)
{
    const listItem=document.createElement('li');

    listItem.innerHTML=`<strong>Selling Price:</strong>${data.Sprice},
                        <strong>Product Name:</strong>${data.Pname}`;

                        //delete product button

           const deleteProductbtn=document.createElement('button');
           deleteProductbtn.textContent="DeleteProduct";
           deleteProductbtn.addEventListener('click',function()
           {
             listItem.remove();

           })
           
           listItem.appendChild(deleteProductbtn);

           list.appendChild(listItem);

}
