const timeTable = {
    first: {
        mon:['Urdu', 'History', 'chemistry', 'Physics', 'Algebra'],
        tue:['Math', 'History', 'chemistry', 'Physics', 'Algebra'],
        wed:['Math', 'History', 'chemistry', 'Physics', 'Algebra'],
        thurs:['Math', 'History', 'chemistry', 'Physics', 'Algebra'],
        fri:['Math', 'History', 'chemistry', 'Physics', 'Algebra'],
        sat:['Math', 'History', 'chemistry', 'Physics', 'Algebra']
    },
    second: {
        mon:['Math', 'History', 'chemistry', 'Physics', 'Algebra'],
        tue:['Math', 'History', 'chemistry', 'Physics', 'Algebra'],
        wed:['Math', 'History', 'chemistry', 'Physics', 'Algebra'],
        thurs:['Math', 'History', 'chemistry', 'Physics', 'Algebra'],
        fri:['Math', 'History', 'chemistry', 'Physics', 'Algebra'],
        sat:['Math', 'History', 'chemistry', 'Physics', 'Algebra']
    },
    third: {
        mon:['Math', 'History', 'chemistry', 'Physics', 'Algebra'],
        tue:['Math', 'History', 'chemistry', 'Physics', 'Algebra'],
        wed:['Math', 'History', 'chemistry', 'Physics', 'Algebra'],
        thurs:['Math', 'History', 'chemistry', 'Physics', 'Algebra'],
        fri:['Math', 'History', 'chemistry', 'Physics', 'Algebra'],
        sat:['Math', 'History', 'chemistry', 'Physics', 'Algebra']
    }
};
$('button').on('click', function(e){
    let inputStd = $(this).text().toLowerCase();
    $('.btn-primary, #note').hide();
    $(this).show();
    let std = timeTable[inputStd];
    let {mon, tue, wed, thurs, fri, sat} = std;
   let template = `<tr>`
    template += `<td><b>Monday</b></td><td>${mon[0]}</td><td>${mon[1]}</td><td>${mon[2]}</td><td>${mon[3]}</td><td>${mon[4]}</td><td>${mon[5]}</td><td>${mon[6]}</td></td>`  
    template += `</tr>`
    template += `<tr>`
    template += `<td><b>Tuesday</b></td><td>${tue[0]}</td><td>${tue[1]}</td><td>${tue[2]}</td><td>${tue[3]}</td><td>${tue[4]}</td><td>${tue[5]}</td><td>${tue[6]}</td></td>`
    template += `</tr>`
    template += `<tr>`
    template += `<td><b>Wednesday</b></td><td>${wed[0]}</td><td>${wed[1]}</td><td>${wed[2]}</td><td>${wed[3]}</td><td>${wed[4]}</td><td>${wed[5]}</td><td>${wed[6]}</td></td>`
    template += `</tr>`
    template += `<tr>`
    template += `<td><b>Thursday</b><td>${thurs[0]}</td><td>${thurs[1]}</td><td>${thurs[2]}</td><td>${thurs[3]}</td><td>${thurs[4]}</td><td>${thurs[5]}</td><td>${thurs[6]}</td></td></td>`
    template += `</tr>`
    template += `<tr>`
    template += `<td><b>Friday</b><td>${fri[0]}</td><td>${fri[1]}</td><td>${fri[2]}</td><td>${fri[3]}</td><td>${fri[4]}</td><td>${fri[5]}</td><td>${fri[6]}</td></td></td>`
    template += `</tr>`
    template += `<tr>`
    template += `<td><b>Saturday</b></td><td>${sat[0]}</td><td>${sat[1]}</td><td>${sat[2]}</td><td>${sat[3]}</td><td>${sat[4]}</td><td>${sat[5]}</td><td>${sat[6]}</td></td>`
    template += `</tr>` 
    $('tbody').html(template)

});
if($('td').text()== 'undefined'){
    $(this).hide()
}

