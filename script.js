$(document).ready(function() {
    $("#reset").click(function() {
        location.reload();
        $("#b1").val('');
        $("#b2").val('');
        $("#b3").val('');
        $("#b4").val('');
        $("#b5").val('');
        $("#b6").val('');
        $("#b7").val('');
        $("#b8").val('');
        $("#b9").val('');
    });
});

flag=1;
function func() {
    let b1, b2, b3, b4, b5, b6, b7, b8, b9;
    b1=$("#b1").val();
    b2=$("#b2").val();
    b3=$("#b3").val();
    b4=$("#b4").val();
    b5=$("#b5").val();
    b6=$("#b6").val();
    b7=$("#b7").val();
    b8=$("#b8").val();
    b9=$("#b9").val();

    if (b1=='X'&&b2=='X'&&b3=='X') {
        $("#print").text('Player \'X\' won');
        $("#b4").prop('disabled', true);
        $("#b5").prop('disabled', true);
        $("#b6").prop('disabled', true);
        $("#b7").prop('disabled', true);
        $("#b8").prop('disabled', true);
        $("#b9").prop('disabled', true);
        setTimeout(function () {
            alert('Player \'X\' won');
        }, 1000);
    }
    else if (b4=='X'&&b5=='X'&&b6=='X') {
        $("#print").text('Player \'X\' won');
        $("#b1").prop('disabled', true);
        $("#b2").prop('disabled', true);
        $("#b3").prop('disabled', true);
        $("#b7").prop('disabled', true);
        $("#b8").prop('disabled', true);
        $("#b9").prop('disabled', true);
        setTimeout(function () {
            alert('Player \'X\' won');
        }, 1000);
    }
    else if (b7=='X'&&b8=='X'&&b9=='X') {
        $("#print").text('Player \'X\' won');
        $("#b1").prop('disabled', true);
        $("#b2").prop('disabled', true);
        $("#b3").prop('disabled', true);
        $("#b4").prop('disabled', true);
        $("#b5").prop('disabled', true);
        $("#b6").prop('disabled', true);
        setTimeout(function () {
            alert('Player \'X\' won');
        }, 1000);
    }
    else if (b1=='X'&&b4=='X'&&b7=='X') {
        $("#print").text('Player \'X\' won');
        $("#b2").prop('disabled', true);
        $("#b3").prop('disabled', true);
        $("#b5").prop('disabled', true);
        $("#b6").prop('disabled', true);
        $("#b8").prop('disabled', true);
        $("#b9").prop('disabled', true);
        setTimeout(function () {
            alert('Player \'X\' won');
        }, 1000);
    }
    else if (b2=='X'&&b5=='X'&&b8=='X') {
        $("#print").text('Player \'X\' won');
        $("#b1").prop('disabled', true);
        $("#b3").prop('disabled', true);
        $("#b4").prop('disabled', true);
        $("#b6").prop('disabled', true);
        $("#b7").prop('disabled', true);
        $("#b9").prop('disabled', true);
        setTimeout(function () {
            alert('Player \'X\' won');
        }, 1000);
    }
    else if (b3=='X'&&b6=='X'&&b9=='X') {
        $("#print").text('Player \'X\' won');
        $("#b1").prop('disabled', true);
        $("#b2").prop('disabled', true);
        $("#b4").prop('disabled', true);
        $("#b5").prop('disabled', true);
        $("#b7").prop('disabled', true);
        $("#b8").prop('disabled', true);
        setTimeout(function () {
            alert('Player \'X\' won');
        }, 1000);
    }
    else if (b1=='X'&&b5=='X'&&b9=='X') {
        $("#print").text('Player \'X\' won');
        $("#b2").prop('disabled', true);
        $("#b3").prop('disabled', true);
        $("#b4").prop('disabled', true);
        $("#b6").prop('disabled', true);
        $("#b8").prop('disabled', true);
        $("#b7").prop('disabled', true);
        setTimeout(function () {
            alert('Player \'X\' won');
        }, 1000);
    }
    else if (b3=='X'&&b5=='X'&&b7=='X') {
        $("#print").text('Player \'X\' won');
        $("#b2").prop('disabled', true);
        $("#b1").prop('disabled', true);
        $("#b4").prop('disabled', true);
        $("#b6").prop('disabled', true);
        $("#b8").prop('disabled', true);
        $("#b9").prop('disabled', true);
        setTimeout(function () {
            alert('Player \'X\' won');
        }, 1000);
    }
    else if (b1=='O'&&b2=='O'&&b3=='O') {
        $("#print").text('Player \'O\' won');
        $("#b4").prop('disabled', true);
        $("#b5").prop('disabled', true);
        $("#b6").prop('disabled', true);
        $("#b7").prop('disabled', true);
        $("#b8").prop('disabled', true);
        $("#b9").prop('disabled', true);
        setTimeout(function () {
            alert('Player \'O\' won');
        }, 1000);
    }
    else if (b4=='O'&&b5=='O'&&b6=='O') {
        $("#print").text('Player \'O\' won');
        $("#b1").prop('disabled', true);
        $("#b2").prop('disabled', true);
        $("#b3").prop('disabled', true);
        $("#b7").prop('disabled', true);
        $("#b8").prop('disabled', true);
        $("#b9").prop('disabled', true);
        setTimeout(function () {
            alert('Player \'O\' won');
        }, 1000);
    }
    else if (b7=='O'&&b8=='O'&&b9=='O') {
        $("#print").text('Player \'O\' won');
        $("#b1").prop('disabled', true);
        $("#b2").prop('disabled', true);
        $("#b3").prop('disabled', true);
        $("#b4").prop('disabled', true);
        $("#b5").prop('disabled', true);
        $("#b6").prop('disabled', true);
        setTimeout(function () {
            alert('Player \'O\' won');
        }, 1000);
    }
    else if (b1=='O'&&b4=='O'&&b7=='O') {
        $("#print").text('Player \'O\' won');
        $("#b2").prop('disabled', true);
        $("#b3").prop('disabled', true);
        $("#b5").prop('disabled', true);
        $("#b6").prop('disabled', true);
        $("#b8").prop('disabled', true);
        $("#b9").prop('disabled', true);
        setTimeout(function () {
            alert('Player \'O\' won');
        }, 1000);
    }
    else if (b2=='O'&&b5=='O'&&b8=='O') {
        $("#print").text('Player \'O\' won');
        $("#b1").prop('disabled', true);
        $("#b3").prop('disabled', true);
        $("#b4").prop('disabled', true);
        $("#b6").prop('disabled', true);
        $("#b7").prop('disabled', true);
        $("#b9").prop('disabled', true);
        setTimeout(function () {
            alert('Player \'O\' won');
        }, 1000);
    }
    else if (b3=='O'&&b6=='O'&&b9=='O') {
        $("#print").text('Player \'O\' won');
        $("#b1").prop('disabled', true);
        $("#b2").prop('disabled', true);
        $("#b4").prop('disabled', true);
        $("#b5").prop('disabled', true);
        $("#b7").prop('disabled', true);
        $("#b8").prop('disabled', true);
        setTimeout(function () {
            alert('Player \'O\' won');
        }, 1000);
    }
    else if (b1=='O'&&b5=='O'&&b9=='O') {
        $("#print").text('Player \'O\' won');
        $("#b2").prop('disabled', true);
        $("#b3").prop('disabled', true);
        $("#b4").prop('disabled', true);
        $("#b6").prop('disabled', true);
        $("#b8").prop('disabled', true);
        $("#b7").prop('disabled', true);
        setTimeout(function () {
            alert('Player \'O\' won');
        }, 1000);
    }
    else if (b3=='O'&&b5=='O'&&b7=='O') {
        $("#print").text('Player \'O\' won');
        $("#b2").prop('disabled', true);
        $("#b1").prop('disabled', true);
        $("#b4").prop('disabled', true);
        $("#b6").prop('disabled', true);
        $("#b8").prop('disabled', true);
        $("#b9").prop('disabled', true);
        setTimeout(function () {
            alert('Player \'O\' won');
        }, 1000);
    }
    else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X'
    || b2 == 'O') && (b3 == 'X' || b3 == 'O') &&
    (b4 == 'X' || b4 == 'O') && (b5 == 'X' ||
    b5 == 'O') && (b6 == 'X' || b6 == 'O') &&
    (b7 == 'X' || b7 == 'O') && (b8 == 'X' ||
    b8 == 'O') && (b9 == 'X' || b9 == 'O')) {
        $("#print").text('Match Tie');
        setTimeout(function() {
            alert('Match Tie');
        }, 1000);
    }
    else {
        if (flag==1) {
            $("#print").text('Player \'X\' turn');
        }
        else {
            $("#print").text('Player \'O\' turn');
        }
    }
}

function func1id() {
    if(flag==1)
    {
        $("#b1").val('X');
        $("#b1").prop('disabled', true);
        flag=0;
    }
    else {
        $("#b1").val('O');
        $("#b1").prop('disabled', true);
        flag=1;
    }
}

function func2id() {
    if(flag==1)
    {
        $("#b2").val('X');
        $("#b2").prop('disabled', true);
        flag=0;
    }
    else {
        $("#b2").val('O');
        $("#b2").prop('disabled', true);
        flag=1;
    }
}

function func3id() {
    if(flag==1)
    {
        $("#b3").val('X');
        $("#b3").prop('disabled', true);
        flag=0;
    }
    else {
        $("#b3").val('O');
        $("#b3").prop('disabled', true);
        flag=1;
    }
}

function func4id() {
    if(flag==1)
    {
        $("#b4").val('X');
        $("#b4").prop('disabled', true);
        flag=0;
    }
    else {
        $("#b4").val('O');
        $("#b4").prop('disabled', true);
        flag=1;
    }
}

function func5id() {
    if(flag==1)
    {
        $("#b5").val('X');
        $("#b5").prop('disabled', true);
        flag=0;
    }
    else {
        $("#b5").val('O');
        $("#b5").prop('disabled', true);
        flag=1;
    }
}

function func6id() {
    if(flag==1)
    {
        $("#b6").val('X');
        $("#b6").prop('disabled', true);
        flag=0;
    }
    else {
        $("#b6").val('O');
        $("#b6").prop('disabled', true);
        flag=1;
    }
}

function func7id() {
    if(flag==1)
    {
        $("#b7").val('X');
        $("#b7").prop('disabled', true);
        flag=0;
    }
    else {
        $("#b7").val('O');
        $("#b7").prop('disabled', true);
        flag=1;
    }
}

function func8id() {
    if(flag==1)
    {
        $("#b8").val('X');
        $("#b8").prop('disabled', true);
        flag=0;
    }
    else {
        $("#b8").val('O');
        $("#b8").prop('disabled', true);
        flag=1;
    }
}

function func9id() {
    if(flag==1)
    {
        $("#b9").val('X');
        $("#b9").prop('disabled', true);
        flag=0;
    }
    else {
        $("#b9").val('O');
        $("#b9").prop('disabled', true);
        flag=1;
    }
}
