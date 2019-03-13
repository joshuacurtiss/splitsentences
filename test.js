const splitSentences = require('./index');
const article = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla rhoncus eros vitae mi placerat placerat. Nunc quis 
    placerat nulla. Praesent mattis sapien euismod, suscipit risus vitae, porttitor arcu. In hac habitasse platea 
    dictumst. Duis non ipsum eu nulla viverra ultricies eget ac sem. Nam viverra et leo quis scelerisque. Nullam 
    vehicula mollis metus sed ullamcorper. Quisque molestie tortor a mollis tempus. Nam facilisis leo at quam iaculis, 
    vitae pretium ligula eleifend! Etiam in quam ultricies, posuere dui sed, tristique magna. Proin varius nec leo at 
    pretium. Cras vitae enim sit amet lectus ullamcorper vestibulum vitae a nisi. Phasellus nisl magna, cursus ut 
    finibus at, varius non lectus.

    Nunc sapien risus, aliquet in tempus eu, efficitur et tortor. Suspendisse molestie, lorem et dictum vehicula, 
    purus ex faucibus diam, sed tincidunt justo metus eu ipsum. Suspendisse eget dolor ex. Phasellus consectetur, eros 
    et mattis egestas, diam lorem tempus nulla, consequat aliquet sem ligula non nulla. Morbi sit amet facilisis nunc, 
    ac tristique neque. Integer ac aliquam orci. Curabitur posuere ultrices luctus. Curabitur cursus diam lectus, eget 
    maximus ipsum aliquet vel. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; 
    In orci est, venenatis in arcu eu, sollicitudin vehicula dolor. Proin condimentum augue molestie, tristique dui 
    eget, hendrerit libero. Nulla facilisi. Vestibulum vestibulum lorem eget dignissim porttitor.

    Lorem ipsum dolor sit amet consectetur adipiscing elit nulla rhoncus eros vitae mi placerat placerat nunc quis, 
    placerat nulla praesent mattis sapien euismod suscipit risus vitae, porttitor arcu in hac habitasse platea 
    dictumst duis non ipsum eu nulla viverra ultricies eget ac sem nam viverra et leo quis scelerisque nullam 
    vehicula mollis metus sed ullamcorper quisque molestie tortor a mollis tempus nam facilisis leo at quam iaculis
    vitae pretium ligula eleifend.
    
    Ut egestas mollis diam, ut bibendum sem blandit quis. Curabitur lobortis, dui ut mollis hendrerit, risus arcu 
    luctus lectus, in suscipit justo dui luctus magna. Suspendisse ut sem consectetur ipsum dignissim commodo eget in 
    neque. Vivamus eget vulputate velit. Quisque at velit non risus consequat rhoncus at sed tortor. Aenean efficitur 
    diam massa, eu aliquet lacus dapibus ut. Etiam elementum massa id augue consequat maximus. Nunc fringilla nunc at 
    venenatis iaculis. Nullam sagittis vitae nisi at tempus. Ut mattis urna at tortor.
`;
console.log('Splitting at default length\n' + '-'.repeat(40));
console.log(splitSentences(article));
const maxlen = 100;
console.log('\n\nSplitting at length of ' + maxlen + '\n' + '-'.repeat(40));
console.log(splitSentences(article, maxlen));
