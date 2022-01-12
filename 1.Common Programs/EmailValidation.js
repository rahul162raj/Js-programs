let valid = [
    'email@example.com',
'firstname.lastname@example.com',
'email@subdomain.example.com',
'firstname+lastname@example.com',
'"email"@example.com',
'1234567890@example.com',
'email@example-one.com',
'_______@example.com',
'email@example.name',
'email@example.museum',
'email@example.co.jp',
'firstname-lastname@example.com',
'あいうえお@example.com',
    ]
    
let invalid = [
    'plainaddress',
'#@%^%#$@#$@#.com',
'@example.com',
'Joe Smith <email@example.com>',
'email.example.com', // 5
'email@example@example.com',
'.email@example.com',
'email.@example.com',
'email..email@example.com',
'email@example.com (Joe Smith)', //10
'email@example',
'email@^example.com',
'email@123.123.123.123',
'email@[123.123.123.123', //15
'email@111.222.333.44444',
'email@example..com',
'Abc..123@example.com',
'”(),:;<>[\]@example.com',
'this\ is"really"not\allowed@example.com',
    ]
    
console.log('\nVALID -------------------------------------------------------------------------')
var EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

valid.forEach((email,index) => {
    
    let result = (EMAIL_REGEX).test(email)
    console.log(index+1, result);
});

console.log('\nINVALID -------------------------------------------------------------------------')

invalid.forEach((email,index) => {

    let result = (EMAIL_REGEX).test(email)
    console.log(index+1, result);
});
