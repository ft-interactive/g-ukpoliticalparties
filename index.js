var data = [
	{name:'Conservatives', shortname:'Con', id:'c', pa_id:''},
	{name:'Labour', shortname:'Lab', id:'l', pa_id:''},
	{name:'Liberal Democrats', shortname:'LD', id:'ld', pa_id:''},
	{name:'UKIP', shortname:'UKIP', id:'ukip', pa_id:''},
	{name:'Greens', shortname:'Green', id:'g', pa_id:''},
	{name:'SNP', shortname:'SNP', id:'snp', pa_id:''},
];

module.exports = function (str){
  return data.find(function(party){
    var found = false;
    Object.keys(party).forEach(function(key){
      if(str === party[key]) found = true;
    });
    return found;
  })
}
