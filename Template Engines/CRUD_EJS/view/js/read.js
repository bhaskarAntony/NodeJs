let users = document.getElementById("users");

const deleteUser = async (id)=>{
    if(window.confirm(`are you sure want to delte user`)){
        console.log(`id  = ${id}`)
    }
}
// print data
function printData(data) {
    data.forEach(item => {
        users.innerHTML = `<div class="col-md-4 mt-3">
            <div class=card>
            <div class=card-header>
                <h4 class=card-title text-center>${item.name}</h4>
            </div>
            <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">
                            <strong>Email</strong>
                            <span class="text-success float-end">${item.email}</span>
                        </li>
                        <li class="list-group-item">
                            <strong>Mobile</strong>
                             <span class="text-success float-end">${item.mobile}</span>
                        </li>
                        <li class="list-group-item">
                            <strong>Gender</strong>
                            <span class="text-success float-end">${item.gender}</span>
                         </li>
                         <li class="list-group-item">
                            <strong>Qualification</strong>
                            <span class="text-success float-end">${item.qualification}</span>
                        </li>
                        <li class="list-group-item">
                            <strong>Address</strong>
                             <span class="text-success float-end">${item.address}</span>
                         </li>
                    </ul>
            </div>
            <div class="card-footer">
                <a href="/user/edit?id=${item._id}" class="btn btn-success" >Edit</a>
                <button class="btn btn-danger" onclick=deleteUser(${item._id})>Delete</button>
            </div>
            </div>
          </div>`
    })
}

(function(){
    fetch(`http://localhost:3458/api/user/all`)
        .then(res => res.json())
        .then(res => {
             printData(res.users)
            // console.log(res.users)

            console.log('users =', res)
        }).catch(err => console.log(err.message))
})()