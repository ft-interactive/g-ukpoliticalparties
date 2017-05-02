var fills = require('g-chartcolour').ukPoliticalParties;
var lines = require('g-chartcolour').ukPoliticalPartiesText;

var data = [{
  name:'Conservatives',
  alias:'conservative,tory,tory party,tories,conservative party', //aliases should be listed in lower case
  shortname:'Con',
  ft_id:'c',
  pa_id:'',
  fillColour:fills.conservative,
  lineColour:lines.conservative
},{
  name:'Labour',
  alias:'labour party',
  shortname:'Lab',
  ft_id:'l',
  pa_id:'',
  fillColour:fills.labour,
  lineColour:lines.labour
},{
  name:'Liberal Democrats',
  alias:'liberal democrat,lib dems,lib dem',
  shortname:'LD',
  ft_id:'ld',
  pa_id:'',
  fillColour:fills['liberal democrats'],
  lineColour:lines['liberal democrats']
},{
  name:'UKIP',
  shortname:'UKIP',
  ft_id:'ukip',
  pa_id:'',
  fillColour:fills.ukip,
  lineColour:lines.ukip
},{
  name:'Greens',
  shortname:'Green',
  ft_id:'g',
  pa_id:'',
  fillColour:fills.green,
  lineColour:lines.green
},{
  name:'Scottish National Party',
  shortname:'SNP',
  ft_id:'snp',
  pa_id:'',
  fillColour:fills.snp,
  lineColour:lines.snp
},{
  name:'DUP',
  shortname:'DUP',
  ft_id:'dup',
  pa_id:'',
  fillColour:fills.dup,
  lineColour:lines.dup
},{
  name:'Sinn Féin',
  shortname:'SF',
  ft_id:'sf',
  pa_id:'',
  fillColour:fills.sf,
  lineColour:lines.sf
},{
  name:'Plaid Cymru',
  shortname:'PC',
  ft_id:'pc',
  pa_id:'',
  fillColour:fills.pc,
  lineColour:lines.pc
},{
  name:'Alliance Party',
  shortname:'alliance',
  ft_id:'a',
  pa_id:'',
  fillColour:fills.alliance,
  lineColour:lines.alliance
},{
  name:'Independent',
  shortname:'Ind',
  ft_id:'i',
  pa_id:'',
  fillColour:fills.independent,
  lineColour:lines.independent
},{
  name:'Other',
  shortname:'oth',
  ft_id:'oth',
  pa_id:'',
  fillColour:fills.other,
  lineColour:lines.other
},{
  name:'SDLP',
  shortname:'SDLP',
  ft_id:'sdlp',
  pa_id:'',
  fillColour:fills.sdlp,
  lineColour:lines.sdlp
},{
  name:'Ulster Unionist',
  shortname:'UUP',
  ft_id:'uup',
  pa_id:'',
  fillColour:fills.uup,
  lineColour:lines.uup
}];

module.exports = function (str){
  return data.find(function(party){
    var found = false;
    Object.keys(party).forEach(function(key){
      if( str.toLowerCase() === party[key].toLowerCase() ) found = true;
      if(key === 'alias'){ //special case
        if( party[key].split(',').indexOf(str.toLowerCase()) > -1 ) found = true;
      }
    });
    return found;
  })
}
