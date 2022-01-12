 function validateMessage(value) {
    let error=''

    const isLink = /<a[^>]*>([^<]+)<\/a>/g.test(value)
    const isImg = /<img [^>]*>/g.test(value)
    const isScript = /<[^>]*script/g.test(value)

    if (isLink || isImg || isScript) {
      error = 'contains dangerous HTML tags'
    }

    return error
  }
  
 console.log(validateMessage('<img />'))
