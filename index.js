var data = [
	{name:'Conservatives', shortname:'Con', ft_id:'c', pa_id:''},
	{name:'Labour', shortname:'Lab', ft_id:'l', pa_id:''},
	{name:'Liberal Democrats', shortname:'LD', ft_id:'ld', pa_id:''},
	{name:'UKIP', shortname:'UKIP', ft_id:'ukip', pa_id:''},
	{name:'Greens', shortname:'Green', ft_id:'g', pa_id:''},
	{name:'SNP', shortname:'SNP', ft_id:'snp', pa_id:''},
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
