var _gaq = _gaq || []; _gaq.push(["_setAccount", "UA-320534-2"]); _gaq.push(["_trackPageview"]);
if (window.location.protocol == 'http:')
   {
       (function() { var ga = document.createElement("script"); ga.type = "text/javascript"; ga.async = true; ga.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js"; var s = document.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ga, s); })();
   }

if (navigator.appVersion.indexOf ("Konqueror") > -1)
   {
      document.writeln ('<STYLE type="text/css">')
      document.writeln ('SPAN.sop SUB {vertical-align: -20% !important }')
      document.writeln ('SPAN.sop SUB+SUP {vertical-align: 35% !important }')
      document.writeln ('SPAN.irred SUB {vertical-align: -15% !important }')
      document.writeln ('SPAN.irred SUP {vertical-align: 10% !important }')
      document.writeln ('SPAN.irred {font-style: bold !importat}')
      document.writeln ('</STYLE>')
   }


if(!document.getElementsByClassName) 
{
    document.getElementsByClassName = function(className) 
       {
           return this.querySelectorAll("." + className)
       }
    Element.prototype.getElementsByClassName = document.getElementsByClassName;
}

Array.prototype.max = function() { return Math.max.apply(null, this); };
Array.prototype.howmany = function(value) { var n=0,i; for (i=1;i<this.length;i++) {n+=(this[i]==value)?1:0}; return n  }
Math.roundfix= function (x,n) { return x.toFixed(n) }
Math.smartroundfix = function (x,n) { var str= x.toFixed(n); var flag=true,i; for (i=str.length-1;i>=str.length-n;i--) {flag=flag&&str.charAt(i)=="0"; }; if (str.charAt(0)=='-') str="−"+str.substring(1,str.length); return (flag)?str.substring(0,str.length-n-1):str}
Array.prototype.remove = function(from, to) { var rest = this.slice((to || from) + 1 || this.length); this.length = from < 0 ? this.length + from : from; return this.push.apply(this, rest); };
if (!Math.sign) {Math.sign = function(x) { return (Math.abs(x)>0.0001)?((x>0)?1:-1):0}}



function number (num, flag)
  {
     var w=""
     if (num<0) {w="minus "; num=-num}

     if (num==0) w="zero"
     else if (num==1) w="one"
     else if (num==2) w="two"
     else if (num==3) w="three"
     else if (num==4) w="four"
     else if (num==5) w="five"
     else if (num==6) w="six"
     else if (num==7) w="seven"
     else if (num==8) w="eight"
     else if (num==9) w="nine"
     else if (num==10) w="ten"
     else if (num==11) w="eleven"
     else if (num==12) w="twelve"
     else if (num==13) w="thirteen"
     else if (num==14) w="fourteen"
     else if (num==15) w="fifteen"
     else if (num==16) w="sixteen"
     else if (num==17) w="seventeen"
     else if (num==18) w="eighteen"
     else if (num==19) w="nineteen"
     else if (num==20) w="twenty"
     else if (num==21) w="twenty-one"
     else if (num==22) w="twenty-two"
     else if (num==23) w="twenty-three"
     else if (num==24) w="twenty-four"
     else if (num==25) w="twenty-five"
     else if (num==26) w="twenty-six"
     else if (num==27) w="twenty-seven"
     else if (num==28) w="twenty-eight"
     else if (num==29) w="twenty-nine"
     else if (num==30) w="thirty"
     else if (num==31) w="thirty-one"
     //else if (num==32) w="thirty-two"
     else w=num

     if (flag) w=w.substring(0,1).toUpperCase()+w.substring(1,w.length)

     return w
  }



var group = new Object();
group.x="5"

// onload handler
function make_sop()
   {
      if (navigator.appVersion.match(/Trident/) && navigator.appVersion.match(/rv:11/)) {document.getElementsByTagName("BODY")[0].className="ie11"}
      if (navigator.appVersion.match(/Edge/)) {document.getElementsByTagName("BODY")[0].className="ie11"}
      //{document.getElementsByTagName("BODY")[0].className="ie11"}
      var el
      if (el=document.getElementById("symbol")) el.pattern=' *([xCc]([1-9]?|[1-9][0-9]+)[ihv]?|[Dd]([1-9]?|[1-9][0-9]+)[hd]?|[OoIi]h?|[TtVv][dh]?|[Ss]([1-9]?|[1-9][0-9]+)|[CcDdSs]|[Cc][si]) *'
      try
         {
            el=document.getElementsByClassName ("sop")
            //alert (el.length)
            for (i=0;i<el.length;i++)
                {
                   sop=el[i].innerHTML
                   //el[i].style.backgroundColor="green"
                   el[i].orig=sop
                   mult=0
                   //alert (sop)
                   if ((sop.charAt(0)=="C") || (sop.charAt(0)=="S"))
                      {
                          extra=''
                          if (sop.charAt(sop.length-1) == '"') extra='<SPAN>&#x2033;</SPAN>'
                          if (sop.charAt(sop.length-1) == "'") extra="<SPAN>&prime;</SPAN>"
                          for (j=sop.length; j>0; j--)
                              {
                                   if (sop.charAt(j) == "^")
                                      {
                                         mult=parseInt(sop.substring(j+1,sop.length))
                                         k=j
                                      }
                              }
                          //alert ("sop, mult= "+sop+" "+mult)
                          ax=parseInt(sop.substring(1,sop.length))
                          //alert ("sop, ax, mult,extra= "+sop+" "+ax+" "+mult+" "+extra)
                          sop1= sop.charAt(0)+"<SUB>"+ax+"</SUB>"
                          if (mult) sop1=sop1 + '<SUP>'+mult+'</SUP>'
                          if (extra) sop1=sop1 + extra
                          //alert ("width before="+get_style(el[i],"width"))
                          el[i].style.width=window.getComputedStyle(el[i], "").getPropertyValue("width")
                          el[i].innerHTML=sop1
                          el[i].style.fontSize="120%"
                          el[i].style.fontWeight="bold"
                          //el[i].title=sop
                          //alert ("width after="+get_style(el[i],"width"))
                       }
                     else if (sop.charAt(0)=="s")
                       {
                          sop=el[i].innerHTML
                          el[i].style.width=window.getComputedStyle(el[i], "").getPropertyValue("width")
                          el[i].innerHTML= "&sigma;" + "<SUB>"+sop.charAt(1)+"</SUB>"
                          if (sop.length > 2) el[i].innerHTML += sop.substring (sop,2,sop.length)
                          el[i].style.fontSize="120%"
                          el[i].style.fontWeight="bold"
                       }
                     else 
                       {
                          sop=el[i].innerHTML
                          el[i].style.width=window.getComputedStyle(el[i], "").getPropertyValue("width")
                          el[i].style.fontSize="120%"
                          el[i].style.fontWeight="bold"
                       }
                  //alert (sop)
                }
            el=document.getElementsByClassName ("irred")
            for (i=0;i<el.length;i++)
                {
                    irred=el[i].innerHTML
                    el[i].orig=irred
                    //el[i].title=irred
                    //el[i].style.backgroundColor="green"
                    superscr=''
                    subscr=''
                    if ((irred.charAt(irred.length-1) == "'"))
                       {
                          superscr="<SUP class=minisop>&prime;</SUP>"
                          irred=irred.substring(0,irred.length-1)
                       }
                     else if ((irred.charAt(irred.length-1) == '"'))
                       {
                          superscr="<SUP class=minisop>&#x2033</SUP>"
                          irred=irred.substring(0,irred.length-1)
                       }
                     if (irred.length > 1)
                       {
                          subscr='<SUB>' + irred.substring(1,irred.length) + "</SUB>"
                       }

                     el[i].style.width=window.getComputedStyle(el[i], "").getPropertyValue("width")
                     el[i].style.height=window.getComputedStyle(el[i], "").getPropertyValue("height")
                     if ((irred.charAt(0) == "A" ) && superscr )
                       {
                          el[i].innerHTML=irred.charAt(0) + subscr + "<SPAN class=kkernthis>" + superscr + "</SPAN>"
                       }
                      else if ((irred.length == 1 ) && superscr )
                       {
                          el[i].innerHTML=irred.charAt(0) + "<SPAN class=kernthis>" + superscr + "</SPAN>"
                          el[i].style.fontWeight="bold"
                       }
                      else 
                       {
                          el[i].innerHTML=irred.charAt(0) + subscr + superscr
                       }
                      el[i].style.fontWeight="bold"
                }
            el=document.getElementsByClassName ("class")
            for (i=0;i<el.length;i++)
                {
                    el[i].orig=el[i].innerHTML
                    //el[i].style.backgroundColor="green"
                    el[i].style.width=window.getComputedStyle(el[i], "").getPropertyValue("width")
                    el[i].style.height=window.getComputedStyle(el[i], "").getPropertyValue("height")
                    //alert (el[i].style.width+" "+el[i].style.height)
                    if (el[i].innerHTML.length > 2 && el[i].previousSibling.nodeName=="#text" && el[i].nextSibling.nodeName=="#text")
                       {
                          el[i].previousSibling.nodeValue = el[i].previousSibling.nodeValue.substring(0,el[i].previousSibling.nodeValue.length-1)
                          el[i].nextSibling.nodeValue = "\u00A0\u00A0"+el[i].nextSibling.nodeValue.substring(1,el[i].nextSibling.nodeValue.length)
                          //el[i].style.backgroundColor="gray"
                       }
                    el[i].style.fontWeight="bold"
                    el[i].style.fontSize="120%"
                    //alert (el[i].style.width+" "+el[i].style.height)
                }
         }
      catch (foo) {}
      if (e=document.getElementById("grp"))
         {
            try
            {
            grp=e.innerHTML
            //e.style.backgroundColor="green"
            e.orig=grp
            e.style.fontWeight="normal"
            e.style.width=window.getComputedStyle(e, "").getPropertyValue("width")
            e.style.height=window.getComputedStyle(e, "").getPropertyValue("height")
            e.style.fontWeight="bold"
            e.style.fontSize="150%"
            e.style.marginBottom="2ex"
            if (grp.length > 1)
               {
                  e.innerHTML = grp.charAt(0) + "<SUB>"+grp.substring(1,grp.length)+"</SUB>"
               }
            }
            catch (foo) {}
         }
      if (window.location.href.indexOf("fmt=simple") >-1 )
         {
             if (navigator.appVersion.indexOf("Chrome") > 0) window.onresize=readjust_sop
             return
         }

      if (document.getElementById("rootbutton")) return


      make_projection()
      make_reduction_and_product_forms()
      if (navigator.appVersion.indexOf("MSIE 8")<0) make_notes()
      if (navigator.appVersion.indexOf("MSIE 8")<0) fix_complex_ref()
      if (navigator.appVersion.indexOf("MSIE 8")<0) make_rottrans()
      if (navigator.appVersion.indexOf("MSIE 8")<0) make_multipoles()
      if (navigator.appVersion.indexOf("MSIE 8")<0) make_chartab()
      if (navigator.appVersion.indexOf("MSIE 8")<0) make_subgroup_table()
      //e1=document.getElementById("chartabdiv").getElementsByClassName("setfontsize")[0]; if(e1) {e1.value=0; e1.onchange()  }
      if (navigator.appVersion.indexOf("MSIE 8")<0) redo_navig()
      if (e=document.getElementById("toggle_trans_sg")) toggle_transitions(e)
      if (e=document.getElementById("toggle_trans_pt")) toggle_transitions(e)

      if (group.nclass > 8 )
         {
            e=document.createElement("DIV")
            e.id="scroll_control_div"
            e.className="stickleft"
            e.innerHTML="<P title='Might be useful for very large groups, but is experimental, unstable and slow. Use at your own risk.'><INPUT onChange='toggle_hscroll(this)' type=checkbox id=scroll_control> Keep text and con&shy;trols fixed to view&shy;port when scrol&shy;ling horizontally"
            var h1=document.getElementsByTagName("H1")[0]
            h1.parentNode.insertBefore(e,h1)
            h1.innerHTML='<NOBR>'+h1.innerHTML+"</NOBR>"
            if (document.getElementById("scroll_control").checked) window.onscroll=scroll_handler
            document.getElementsByTagName("H1")[0].className="stickleft"
         }
      var e1=document.getElementById("sgrouptitle")
      var el=e1.parentNode.nextSibling
      if ((el.innerHTML!="N/A" && el.innerHTML!="Wait") && !e1.title) e1.title="Trivial subgroups are not counted here"
      //var el=document.getElementsByClassName("setfontsize")
      //for (i=0; i<el.length; i++) {el[i].value=0; el[i].onchange()}

      if (navigator.userAgent.match(/Firefox/) && group.nclass>20 ) document.getElementsByTagName("BODY")[0].className="notransitions"
      if (navigator.appVersion.indexOf("MSIE 8")<0) 
           {
               fix_table_colwidth("glance","glance_td1a","glance_td2"); 
               fix_table_colwidth("glance","glance_td1","glance_td2")
           }
   }

function toggle_hscroll(that)
   {
      if (that.checked) 
         {
            var el=document.getElementById("irrationalbody")
            if (el)  el.style.width=window.getComputedStyle(el, "").getPropertyValue("width")
            el=document.getElementsByTagName("BODY")[0]
            el.className+=" leftsticked"
            window.scrollTo(0,window.pageYOffset)
            scroll_handler()
            window.onscroll=scroll_handler
         } 
       else 
         {
            window.onscroll=""
            var el=document.getElementById("irrationalbody")
            if (el)  el.style.width=""
            window.scrollTo(0,window.pageYOffset)
            el=document.getElementsByTagName("BODY")[0]
            el.className=el.className.replace(/ *leftsticked/," ")
            scroll_handler()
         }
   }
var last_page_offset=-1
function scroll_handler()
  {
       //console.log ("Onscroll handler: last_page_offset ="+last_page_offset+"   window.pageXOffset="+window.pageXOffset)
       if (last_page_offset == -1 && window.pageXOffset == 0 || last_page_offset == window.pageXOffset) return
       el=document.getElementsByClassName("stickleft")
       for (i=0; i<el.length;i++)
           {
               if (el[i].id=="scroll_control_div") el[i].style.marginRight=-window.pageXOffset+"px"
               else el[i].style.marginLeft=window.pageXOffset+"px"
           }
       last_page_offset = window.pageXOffset
  }

var old_font_size=""
function readjust_sop()
   {
      if (old_font_size == window.getComputedStyle(document.getElementById("grp"), "").getPropertyValue("font-size")) return
      old_font_size=window.getComputedStyle(document.getElementById("grp"), "").getPropertyValue("font-size")
      el=document.getElementsByTagName("*")
      j=0
      for (i=0; i<el.length; i++)
         {
             if (el[i].orig)
                {
                     fw=el[i].style.fontWeight
                     fs=el[i].style.fontSize
                     ih=el[i].innerHTML

                     el[i].style.fontWeight=''
                     el[i].style.width=''
                     el[i].style.fontSize=''
                     el[i].style.height=''

                     el[i].innerHTML=el[i].orig
                     //el[i].title+="X"
                     //el[i].style.backgroundColor="lime"
                     j++

                     if (1||el[i].style.width) el[i].style.width=window.getComputedStyle(el[i], "").getPropertyValue("width")
                     if (1||el[i].style.height) el[i].style.height=window.getComputedStyle(el[i], "").getPropertyValue("height")

                     el[i].innerHTML=ih

                     el[i].style.fontSize=fs
                     el[i].style.fontWeight=fw

                }
         }
      //alert(j)
   }

function fix_table_colwidth(id0,id1,id2)
  {
    var e0=document.getElementById(id0)
    var e1=document.getElementById(id1)
    if (!e1) e1=e0.getElementsByClassName(id1)[0]
    var e2=document.getElementById(id2)
    if (!e2) e2=e0.getElementsByClassName(id2)[0]
    if (e1) var e1p=e1.previousSibling

    //alert (id0+": "+e0+", "+id1+": "+e1+" "+e1p+" "+id2+": "+e2)

    if (!e0 || !e1 || !e1p || !e2) return


    e1.style.width=""
    e1p.style.width=""
    //e1.style.backgroundColor="red"
    //e1p.style.backgroundColor="yellow"
    //e2.style.backgroundColor="green"

    e1p.style.width=0
    w2=parseInt(window.getComputedStyle(e2, "").getPropertyValue("width"))
    w1=parseInt(window.getComputedStyle(e1, "").getPropertyValue("width"))

    var w
    //console.log ("Before loop: w1("+id1+")="+w1+"   w2("+id2+")="+w2)
    for (w=w1+1;  w<w2 && parseInt(window.getComputedStyle(e2, "").getPropertyValue("width")) == w2;  w++)
       {
           e1.style.width=w+"px"
           //console.log ("Inside loop: w="+w+"  w1("+id1+")="+window.getComputedStyle(e1, "").getPropertyValue("width")+"   w2("+id2+")="+window.getComputedStyle(e2, "").getPropertyValue("width"))
           //alert (window.getComputedStyle(e1, "").getPropertyValue("width")+" "+window.getComputedStyle(e1p, "").getPropertyValue("width")+" "+window.getComputedStyle(e2, "").getPropertyValue("width"))
       }

    
    return
  }
                         
function submit_form ()
   {
       el=document.getElementById("symbol")
       symbol=document.getElementById("symbol").value.toLowerCase()
       if (symbol == "Ci" || symbol == "ci") symbol="S2"
       if (symbol == "Cs" || symbol == "cs") symbol="C1h"
       if (symbol == "S1" || symbol == "s1") symbol="C1h"
       if (symbol == "V" || symbol == "v") symbol="D2"
       if (symbol == "Vh" || symbol == "vh") symbol="D2h"
       if (symbol == "Vd" || symbol == "vd") symbol="D2d"
       sym1=symbol.charAt(0)
       if(sym1 == 'i') sym1='I'
       if(sym1 == 't') sym1='T'
       if(sym1 == 'o') sym1='O'
       if(sym1 == 'd') sym1='D'
       if(sym1 == 'c') sym1='C'
       if(sym1 == 's') sym1='S'
       if (sym1 != 'S' && sym1 != 'C' && sym1 != 'D' && sym1 != 'O' && sym1 != 'I' && sym1 != 'T') {el.className="invalid"; el.onkeypress=onkeypress_clear; return true}
       num=parseInt (symbol.substring (1,symbol.length))
       if (num < 0) {el.className="invalid"; el.onkeypress=onkeypress_clear; return false}
       if (num != num) num=0
       if (num > 0) sym2=symbol.charAt((" "+num).length)
        else sym2=symbol.charAt(1)
       //alert ("'"+sym1+"' "+"'"+num+"' "+"'"+sym2+"' ")
       if (sym2 == 'i')
          {
             c4=num-(parseInt((num+0.01)/4))*4
             if (c4 == 0) {symbol = "S"+num}
             if (c4 == 1 || c4==3) {symbol = "S"+(2*num)}
             if (c4 == 2) {symbol = "C"+(num/2)+"h"}
             sym1=symbol.charAt(0)
             num=parseInt (symbol.substring (1,symbol.length))
             sym2=symbol.charAt((" "+num).length)
          }
       
       if (sym1=='I' && sym2=='') {window.location.href='I.html'; return false}
       if (sym1=='I' && sym2=='h') {window.location.href='Ih.html'; return false}
       if (sym1=='O' && sym2=='') {window.location.href='O.html'; return false}
       if (sym1=='O' && sym2=='h') {window.location.href='Oh.html'; return false}
       if (sym1=='T' && sym2=='') {window.location.href='T.html'; return false}
       if (sym1=='T' && sym2=='h') {window.location.href='Th.html'; return false}
       if (sym1=='T' && sym2=='d') {window.location.href='Td.html'; return false}

       if (num == 0) {el.className="invalid"; el.onkeypress=onkeypress_clear; return false}
       //if ((window.location.protocol == 'http:') && (num > 32 )) return false
       if ((num >128) && (num !=136 && num!=144 && num!=153 && num!=160 && num!=170 && num!=192 && num!=204 && num!=240 && num!=255 && num!=256 && num!=257 && num != 512 && num!=666)) {el.className="invalid"; el.onkeypress=onkeypress_clear; return false}
       var url= (sym1+num+sym2+".html")

       if (sym1=='C' && (sym2=='' || sym2=='v' || sym2=='h')) {window.location.href=url; return false}
       if (sym1=='D' && (sym2=='' || sym2=='d' || sym2=='h')) {window.location.href=url; return false}
       if (sym1=='S' && sym2=='' && parseInt((num/2))*2 == num) {window.location.href=url; return false}
       if (sym1=='S' && sym2=='' && parseInt((num/2))*2 != num) {window.location.href="C"+num+"h.html"; return false}
       {el.className="invalid"; el.onkeypress=onkeypress_clear; return false}
   }


function switch_to_graphic_display ()
{
if (dispflag)
   {
       document.getElementById ("raw").style.display="none"
       document.getElementById ("graphic").style.display="block"
       //document.getElementById ("rootform").onsubmit='switch_to_plain_display(); return false'
       document.getElementById ("rootbutton").value='Switch list to plain display'
   }
else
   {
       document.getElementById ("raw").style.display="block"
       document.getElementById ("graphic").style.display="none"
       //document.getElementById ("rootform").onsubmit='switch_to_graphic_display(); return false'
       document.getElementById ("rootbutton").value='Switch list to graphic display'
   }
dispflag=!dispflag
}
var dispflag=true
group.ndigits=4


function make_projection()
   {
      if (document.getElementById("raw")) return
     if (!document.getElementsByClassName) return
      var textelement=document.getElementById("grp").parentNode
      var text=textelement.innerHTML.replace(/(\r\n|\n|\r)/gm, "@")
      group.nclass=0
      var i,j,k
      headline=split_line(text,0)
      group.grpsym=read_from_line(headline,0)
      group.grpname=group.grpsym.replace (/<[^<>]*>/g,"")
      if (group.grpname.match (/D1[hd]?$|C1v/))
         {
            group.noncanonical=true
            group.equivirr=new Array()
            if (group.grpname == "C1v")
               {
                  group.equiv="C1h"
                  group.equivirr=["A′","A″"]
               }
             else if (group.grpname == "D1")
               {
                  group.equiv="C2"
                  group.equivirr=["A","B"]
               }
             else if (group.grpname == "D1h")
               {
                  group.equiv="C2v"
                  group.equivirr=["A1","A2","B1","B2"]
               }
             else if (group.grpname == "D1d")
               {
                  group.equiv="C2h"
                  group.equivirr=["Ag","Bg","Au","Bu"]
               }
           }
      group.sop=new Array();
      group.sop0=new Array()
      group.angle=new Array();
      group.sopfact=new Array();
      for (i=1; ;i++)
          {
              str=read_from_line(headline,i)
              if (str=='&lt;R&gt;')
                 {
                     break
                 }
               else
                 {
                     str=str.replace(/>i</gm, ">i<sub class=invisible>0</sub><")
                     if (group.grpname=="Ih" && str.match(/σ/)) str=str.replace(/σ/,"σ<sub class=invisible>0</sub>")
                     group.sop[group.sop.length]=str.replace (/&nbsp;&nbsp;/,"")
                 }
          }
      group.nclass=group.sop.length
      group.spherical=new Object()
      group.spherical["s"]=new Array
      group.spherical["0"]=new Array
      for (i=0;i<group.nclass;i++) {group.spherical["s"][i]=1; group.spherical["0"][i]=1}

      for (i=0;i<group.nclass;i++) group.sop0[i]=group.sop[i].replace(/<sup>/i,"^").replace(/<[^<>]*>/g,"").replace(/([Eiσ])0/,"$1").replace(/^[0-9]*  */,"")
      group.sop[0]=group.sop[0].replace(/E/gm, "E<sub class=invisible>0</sub>")

      //for (i=0;i<group.nclass;i++) {if (group.sop[i].indexOf("<sup>") < 0) {group.sop[i]=group.sop[i].replace(/<\/sub>/,'</sub><sup class=invisible>9</sup>')}}


      group.grporder=0
      junk=document.createElement ("SPAN")

      el=document.getElementsByClassName("sop")
      var pi=4*Math.atan(1)
      for (i=0;i<group.nclass;i++)
          {
              group.angle[i]=false
              c1= el[i].innerHTML.charAt(0)
              c2= parseInt(el[i].innerHTML.replace (/.*<sub>(.*)<\/sub>.*/,"$1"))
              c3= parseInt(el[i].innerHTML.replace (/.*<sup>(.*)<\/sup>.*/,"$1"))
              if (!c3) c3=1
              if (c1=="E") group.angle[i]=2*pi 
              else if (c1=="σ") group.angle[i]=-2*pi 
              else if (c1=="i") group.angle[i]=-pi 
              else if (c1=="C" && c2 ) group.angle[i]=2*pi/c2*c3
              else if (c1=="S" && c2) group.angle[i]=-2*pi/c2*c3 
              if (!group.angle[i]) 
                 {
                     c2= parseInt(group.sop[i].replace (/^...*> (<span.*)/i,"$1").replace (/<[^<>]*> */g,"").replace (/^./,""))
                     c3=parseInt(group.sop[i].replace (/.*\^([0-9][0-9]*).*/,"$1"))
                     if (!c3) c3=1
                     if (c1=="E") group.angle[i]=2*pi
                     else if (c1=="s") group.angle[i]=-2*pi
                     else if (c1=="i") group.angle[i]=-pi
                     else if (c1=="C" && c2 ) group.angle[i]=2*pi/c2*c3
                     else if (c1=="S" && c2) group.angle[i]=-2*pi/c2*c3  
                     //alert ("2 Done "+i+" "+group.angle[i])
                 }
               else
                 {
                      //alert ("Done "+i+" "+group.angle[i])
                 }
          }



      for (j=0;j<group.nclass;j++) 
          {
              junk.innerHTML=group.sop[j]
              group.sopfact[j]=1
              if (junk.firstChild && junk.firstChild.firstChild && junk.firstChild.firstChild.nodeType==3 && parseInt(junk.firstChild.firstChild.nodeValue)) group.sopfact[j]=parseInt(junk.firstChild.firstChild.nodeValue)
              group.grporder+=group.sopfact[j]
          }

      //for (i=0;i<group.nclass;i++) alert (i+"  sop="+group.sop[i]+"   "+group.sopfact[i]+"   "+group.grporder)

      group.cryst=true
      group.irrep=new Array()
      group.chartab=new Array()
      group.irrepfact=new Array()
      group.trans=new Array()
      var joff
      for (i=0; i<group.nclass; i++)
        {
           line=split_line(text,i+1)
           group.irrep[i]=read_from_line (line,0,true).replace(/irred/,"irred i"+i)
           if (group.irrep[i].indexOf("minisop")==-1) group.irrep[i]=group.irrep[i].replace(/<sub>/i, "<sub class=alone>")
           if (i==0 && read_from_line (line,1,true) == "1.00000") group.ndigits=5
           group.roundoff=1
           for (k=0;k<group.ndigits;k++) {group.roundoff = group.roundoff * 10}
           str=read_from_line (line,1,true)
           joff=1
           group.irrepfact[i]=1
           if (str.indexOf('class="red"')>0 || str.indexOf('class=red')>0) {joff=2;group.irrepfact[i]=2}
           //if (group.irrep[i].indexOf('<span class="red">*</span>')>0) {group.irrepfact[i]=2; group.irrep[i]=group.irrep[i].substring(0,group.irrep[i].length-27)}
           group.chartab[i]=new Array()
           for (j=0;j<group.nclass; j++)
               {
                    group.chartab[i][j]=parseFloat(read_from_line (line,j+joff,true))
               }

           foo = new Array()
           str=read_from_line(line,group.nclass+joff+1,true)
           str=str.replace (/<[^<>]*>/g,"")

           if (str == "T..") foo[foo.length]="<I>x</I>"
            else if (str == ".T.") foo[foo.length]="<I>y</I>"
            else if (str == "..T") foo[foo.length]="<I>z</I>"
            else if (str == "TTT") foo[foo.length]="<I>x</I>,<I>y</I>,<I>z</I>"
            else if (str == "TT.") foo[foo.length]="<I>x</I>,<I>y</I>"
           if ((str.indexOf("TT") > -1) && (group.chartab[i][0] > 1.5)) foo[foo.length-1]='('+foo[foo.length-1]+")"
           

           str=read_from_line(line,group.nclass+joff,true)
           str=str.replace (/<[^<>]*>/g,"")

           if (str == "T..") foo[foo.length]="R<I><SUB>x</SUB></I>"
            else if (str == ".T.") foo[foo.length]="R<I><SUB>y</SUB></I>"
            else if (str == "..T") foo[foo.length]="R<I><SUB>z</SUB></I>"
            else if (str == "TTT") foo[foo.length]="R<I><SUB>x</SUB></I>,R<I><SUB>y</SUB></I>,R<I><SUB>z</SUB></I>"
            else if (str == "TT.") foo[foo.length]="R<I><SUB>x</SUB></I>,R<I><SUB>y</SUB></I>"
           if ((str.indexOf("TT") > -1) && (group.chartab[i][0] > 1.5)) foo[foo.length-1]='('+foo[foo.length-1]+")"

           group.trans[i]=foo.toString().replace(/,/g,", ").replace(/(\([^()]*), ([^()]*\))/g, "$1,$2").replace(/(\([^()]*), ([^()]*\))/g, "$1,$2")

           //alert (i+"  "+group.irrep[i]+"  "+" "+joff+" "+group.irrepfact[i]+"   chars="+group.chartab[i])
        }
      
      for (j=1;j<5;j++)
          {
               str=split_line(text,i+j)
               if (str.indexOf('Irrational character values')>-1) break
          }

      group.intsop = new Array()
      group.charpatt = new Array()
      group.charpatt[0]='( *\\\+?[0-9]+ *| *#[0-9]+ *| *[+#]?)'
      group.intsop[0]=true
      var realpatt='( *[-+]?[0-9]*\\\.?[0-9]+ *| *[-+]?[0-9]+\\\.?[0-9]* *| *#[0-9]+ *| *[-+#]?)'
      for (i=1; i<group.nclass;i++) { group.intsop[i]=true; group.charpatt[i]='( *[-+]?[0-9]+ *| *#[0-9]+ *| *[#+-]?)'}
      if (str.indexOf('Irrational character values')>-1)
          {
             group.cryst=false
             for (k=i+j;;k++)
                 {
                      str=split_line(text,k)
                      if (str.length < 10) break
                      str=str.substring(29,str.length)
                      str=str.substring(0,str.indexOf('=')) // safari wants this
                      sharp=parseFloat(str)
                      for (i=0; i<group.nclass; i++)
                          {
                              for (j=0; j<group.nclass; j++)
                                  {
                                      if (Math.abs(group.chartab[i][j] - sharp)*group.roundoff < 1) {group.intsop[j]=false; group.chartab[i][j]=sharp; group.charpatt[j]=realpatt}
                                      if (Math.abs(group.chartab[i][j] + sharp)*group.roundoff < 1) {group.intsop[j]=false; group.chartab[i][j]=-sharp; group.charpatt[j]=realpatt}
                                  }
                          }
                 }
           }                      
      

      group.xyz=new Array()
      group.rot=new Array()
      group.quad=new Array()
      group.improper=new Array()
      for (i=0;i<group.nclass;i++) {group.quad[i]=(2+Math.sign(group.angle[i])*2*Math.cos(group.angle[i])+2*Math.cos(2*group.angle[i]))}

      for (i=0;i<group.nclass;i++) {group.improper[i]=0;group.xyz[i]=0;group.rot[i]=0}
      for (i=0;i<group.nclass;i++)
          {
           if (group.trans[i].match(/<I>[xyz]<\/I>/ig))
              {
                  for (j=0;j<group.nclass;j++)  group.xyz[j]+=group.trans[i].match(/<I>[xyz]<\/I>/ig).length/group.chartab[i][0] * group.chartab[i][j]
                  group.improper[i]+=group.trans[i].match(/<I>[xyz]<\/I>/ig).length/group.chartab[i][0]
              }
           if (group.trans[i].match(/R<I>/ig))
              {
                  for (j=0;j<group.nclass;j++)  group.rot[j]+=group.trans[i].match(/R<I>/ig).length/group.chartab[i][0] * group.chartab[i][j]
                  group.improper[i]+=group.trans[i].match(/R<I>/ig).length/group.chartab[i][0]
              }
          }

       group.xyzfl=new Array()
       group.quadfl=new Array()
       for (i=0; i<group.nclass;i++) 
           {
               var x=0,y=0
               for (j=0; j<group.nclass; j++) 
                   {
                       x+=group.xyz[j]  * group.chartab[i][j] * group.sopfact[j]
                       y+=group.quad[j] * group.chartab[i][j] * group.sopfact[j]
                   }
               group.xyzfl[i]=x>0.0001
               group.quadfl[i]=y>0.0001
           }

       group.spherical["r"]=group.rot

       //for (i=0; i<group.nclass; i++) alert (i+"  "+group.irrep[i]+"  "+" "+group.irrepfact[i]+"   chars="+group.chartab[i])
      
   }

function fix_complex_ref()
   {
       e1=document.getElementById("complex1")
       e2=document.getElementById("complex2")
       e2=document.getElementById("complex2")
       e3=document.getElementById("complexref")
       e4=document.getElementById("complextitle")
       e5=document.getElementById("quasicryst")
       e6=document.getElementById("crysttitle")
       eli=document.getElementById("noteslist").getElementsByTagName("LI")
       str=""
       for (i=1;i<eli.length;i++)
           {
              if (e1 && e2 && e3 && e1==eli[i]) str="points "+"αβγδεζηθικλμ".charAt(i)
              if (e1 && e2 && e3 && e2==eli[i]) str+=" and "+"αβγδεζηθικλμ".charAt(i)
              if (e4&& e1==eli[i]) e4.title="See point "+"αβγδεζηθικλμ".charAt(i)+" on the left side"
              if (e6&& e5==eli[i]) e6.title="See point "+"αβγδεζηθικλμνξο".charAt(i)+" on the left below"
           }
       if (str) {e3.innerHTML = str; e3.href="#complex1"}
   }

function split_line (text,nl)
   {
      var i,iend,llen,istart,pos
      iend=-1
      llen=text.length
      for (i=0;i<=nl;i++)
          {
             istart=iend+1
             pos=text.substring (istart, llen).indexOf("@")
             iend=istart+pos
             //alert (text.substring(istart,iend))
          }
      return (text.substring(istart,iend))
   }


function read_from_line (line,nl,flag)
   {
       var i,j,istart,iend,llen,ntag,intag,str,blank,second
       iend=-1
       llen=line.length
       for (i=0; i<=nl; i++)
           { 
              istart=iend+1
              //alert ("i="+i+"  line='"+line.substring(istart,llen)+"'")
              while (line.charAt(istart)==' ') istart++
              //alert ("i="+i+"  line='"+line.substring(istart,llen)+"'")
              ntag=0
              intag=false
              second=false
              for (j=istart;j<llen;j++)
                  {
                     if (line.charAt(j)=='<') {intag=true;(line.charAt(j+1)=='/')?ntag--:ntag++}
                     if (line.charAt(j)=='>') {intag=false}
                     //alert ("i="+i+"   j="+j+"   char='"+line.charAt(j)+"'  intag="+intag+"   ntag="+ntag)
                     if (line.charAt(j)==' ' && !intag && ntag==0)
                        {
                            if ( flag ) break  // single space breaks in true mode
                            if (line.charAt(j-1)!='>') break  // double space breaks in flase mode
                            if (second) break  // second single space breaks in false mode
                            second=true
                        }
                  }
              iend=j
              str=line.substring(istart,iend)
              if (str.substring(str.length-1,str.length) == ' ') str=str.substring(0,str.length-1)
              //alert ("found string='"+str+"'")
            }
         //alert ("Final string="+str)
         return (str)
          
   }


function make_reduction_and_product_forms()
{
     if (document.getElementById("raw")) return
     if (!document.getElementsByClassName) return
     var hr=document.getElementsByTagName("HR")
     if (!hr) return
     e=document.createElement ("HR")
     hr[0].parentNode.insertBefore(e,hr[0])
     e=document.createElement ("FORM")
     e.id="reduceform"
     e.onsubmit=reduceform_submitter
     hr[1].parentNode.insertBefore(e,hr[1])
     form=document.getElementById("reduceform")
     var s1,s2='',s3,s4
     if (group.irrepfact.howmany(2)==0) s1="<H2 class=stickleft id=h_project>Reduce any reducible representation to a unique linear combination of irreducible representations</H2> <DIV class=stickleft><P>Enter <I>either</I> characters of a reducible representation <I>or</I> (for normal mode analysis) the number of atoms stationary under a symmetry operation preceded by #. <P class=expl>As soon as all fields have been filled in, the input is evaluated using the “reduction formula”, where <I>h</I>="+group.grporder+" is the group order, <I>i</I> marks an irreducible representation and <I>j</I> loops over the classes: <IMG style=\"margin: 0.5em 0 -0.3em 4em; height:8ex; display:block\" alt=\"Reduction fomula for reduction of reducible representations into irreducible representations in group theory\" src=reduction_formula_simple.png><P class=expl>The <I>c<SUB>i</SUB></I> are the coefficients of the <I>i</I>.th irreducible representation in the direct sum. The formula as printed here would not work  for Abelian groups with elements of order three or higher.</DIV> <TABLE id=reducetable border=0>"
     else s1="<H2 class=stickleft id=h_project>Reduce any reducible representation to a unique linear combination of irreducible representations</H2>  <DIV class=stickleft> <P>Enter <I>either</I> characters of a reducible representation <I>or</I> (for normal mode analysis) the number of atoms stationary under a symmetry operation preceded by #. <P class=expl>As soon as all fields have been filled in, the input is evaluated using the “reduction formula”, where <I>i</I> marks an irreducible representation and <I>j</I> loops over the classes: <IMG style=\"margin: 0.5em 0 -0.3em 4em; height:8ex; display:block\" alt=\"Reduction fomula for reduction of reducible representations into (pseudo)-irreducible representations in group theory\" src=reduction_formula.png><P class=expl>The <I>c<SUB>i</SUB></I> are the coefficients of the <I>i</I>.th irreducible representation in the direct sum. The formula as printed here is general and valid for all point groups, even if the basis elements <I>&chi;<SUB>i,&thinsp;j</SUB></I> form ortho&shy;gonal but <I>non</I>irreducible representations (as the " + ((group.irrepfact.howmany(2)==1)?" “E” representation":(number(group.irrepfact.howmany(2))+" “E” representations")) +" of this group). See above <A id=complexref>in the Notes</A>. For any truly irreducible representation <I>i</I>, the sum in the denominator will evaluate to the group order <I>h</I>="+group.grporder+", giving the familiar form of the formula. </DIV> <TABLE id=reducetable border=0>"
     s1+="<COL></COL>"
     for (i=0;i<group.nclass;i++) {s1+="<COL class=cg></COL>"}
     s1+="<THEAD><TR><TD id=corner>"
     for (i=0;i<group.nclass;i++) {s2+="<TD class=sopcell>"+group.sop[i]}
     if (navigator.appVersion.indexOf("MSIE 8")>0) {s3="<TD id=showhide colspan=2 class=status></TD><TBODY><TR><TD>"}
      else if (navigator.appVersion.indexOf("MSIE 9")>0) {s3="<TD id=showhide colspan=2 class=status></TD><TBODY><TR><TD>"}
      else {s3="<TD id=showhide colspan=2 class=status><A href='javascript:show_characters()'>Show irreducible representations</A><TBODY><TR><TD>"    }
     s3="<TD id=showhide colspan=2 class=status><A href='javascript:show_characters()'>Show irreducible representations</A><TBODY><TR><TD>"
     for (i=0;i<group.nclass;i++) s3+="<TD></TD>"
     if ((navigator.appVersion.indexOf("MSIE 8")<0)) s3+="<TD colspan=2 class=showir><FORM onSubmit='return false'><SPAN class=showir>Mark active: <LABEL><INPUT type=checkbox onChange='show_redform_raman(this)'> <SPAN>Raman</SPAN></LABEL> &nbsp; &nbsp; <LABEL><INPUT type=checkbox onChange='show_redform_ir(this); return false'> <SPAN>IR</SPAN></LABEL> </SPAN></FORM><TR><TD>"    
       else s3+="<TD colspan=2><TR><TD>"
     for (i=0;i<group.nclass;i++) {s3+="<TD class=forminput><INPUT onChange='do_project(this)' pattern='"+group.charpatt[i]+"' class=sopcl type=text size=6></TD>"}
     form.innerHTML=s1+s2+s3+"<TD colspan=2 class=status></TD></TR></TABLE>"

     el=document.getElementById("reduceform")
     var s4=""
     try {if (group.nclass>=8) s4='<P class=stickleft style="padding-left:3em">Set font size in table to <INPUT type=number style="width:4em" step="any" pattern="[0-9]*\.[0-9]" id="set_font_size_reducetable" class=setfontsize onChange="set_font_size(this)" value="'+parseInt(window.getComputedStyle(el, "").getPropertyValue("font-size"))+'" defval="'+parseInt(window.getComputedStyle(el, "").getPropertyValue("font-size"))+'"> px'} catch (foo) {}
     
     form.innerHTML=s1+s2+s3+"<TD colspan=2 class=status></TD></TR></TABLE>"+s4
     e=form.getElementsByTagName("THEAD")[0].getElementsByClassName("sopcell")
     if (navigator.appVersion.indexOf("xChrome/")==-1)
        {
            for (i=0; i<e.length;i++) 
                {
                   e[i].onclick=toggle_reduce_col
                   e[i].onmouseover=highlight_reduce_col
                   e[i].onmouseout=unhighlight_reduce_col
                }
       }
      else
       {
            document.getElementById("reduceform").className="chrome"
       }

     e1=document.getElementById("reduceform").getElementsByClassName("setfontsize")[0]; if(e1) {e1.value=0; e1.onchange()  }

     e=document.createElement ("HR")
     hr[hr.length-1].parentNode.insertBefore(e,hr[hr.length-1])
     e=document.createElement ("FORM")
     e.id="productform"
     e.onsubmit=productform_submitter_dum
     hr[hr.length-1].parentNode.insertBefore(e,hr[hr.length-1])
     form=document.getElementById("productform")

     el=document.getElementsByClassName("irred")
     var patt="",patt1=""
     var irrepex=""
     group.orig=new Array()
     for (i=0;i<group.nclass;i++)
         {
             if (i!=0) patt+="|"
             if (i!=0) patt1+="|"
             if (el[i].orig) group.orig[i]=el[i].orig
                else group.orig[i]=group.irrep[i].replace(/<[^<>]*>/g,"")
             group.irrep[group.orig[i]]=group.irrep[i]
             group.chartab[group.orig[i]]=group.chartab[i]
             patt+=group.orig[i]
             patt1+=group.orig[i]
             if (group.orig[i].length>1 && !patt1.match(new RegExp("\\|"+group.orig[i].substring(0,1)+"\\|",""))) patt1+=("|"+group.orig[i].substring(0,1))
             if (group.orig[i].length>2 && !patt1.match(new RegExp("\\|"+group.orig[i].substring(0,2)+"\\|",""))) patt1+=("|"+group.orig[i].substring(0,2))
             if (group.orig[i].length>3 && !patt1.match(new RegExp("\\|"+group.orig[i].substring(0,3)+"\\|",""))) patt1+=("|"+group.orig[i].substring(0,3))
             //alert (i+" "+group.orig[i]+" "+group.irrep[i])
             group[group.orig[i]]=group.irrep[i]
             if (i>0 && i<6) irrepex+=", "
             if (i<6) irrepex+=group.orig[i]
             if (i==6) irrepex+=" etc"
         }
     irrepex=irrepex.replace(/, *$/,"")
     patt1=" *(("+patt+") +)*("+patt1+")?"
    
     if (group.grpname=="C1") return
            
     for (i=patt.length-1;i>=0;i--)
         {
            if (patt.charAt(i)=='A') patt=patt.substring (0,i) + '[Aa]' + patt.substring (i+1,patt.length)
            if (patt.charAt(i)=='B') patt=patt.substring (0,i) + '[Bb]' + patt.substring (i+1,patt.length)
            if (patt.charAt(i)=='E') patt=patt.substring (0,i) + '[Ee]' + patt.substring (i+1,patt.length)
            if (patt.charAt(i)=='T') patt=patt.substring (0,i) + '[Tt]' + patt.substring (i+1,patt.length)
            if (patt.charAt(i)=='G') patt=patt.substring (0,i) + '[Gg]' + patt.substring (i+1,patt.length)
            if (patt.charAt(i)=='H') patt=patt.substring (0,i) + '[Hh]' + patt.substring (i+1,patt.length)
            if (patt.charAt(i)=='"') patt=patt.substring (0,i) + '(\"|\'\')' + patt.substring (i+1,patt.length)
            if (patt.charAt(i)=="'") patt=patt.substring (0,i) + "\'" + patt.substring (i+1,patt.length)
         }
     for (i=patt1.length-1;i>=0;i--)
         {
            if (patt1.charAt(i)=='A') patt1=patt1.substring (0,i) + '[Aa]' + patt1.substring (i+1,patt1.length)
            if (patt1.charAt(i)=='B') patt1=patt1.substring (0,i) + '[Bb]' + patt1.substring (i+1,patt1.length)
            if (patt1.charAt(i)=='E') patt1=patt1.substring (0,i) + '[Ee]' + patt1.substring (i+1,patt1.length)
            if (patt1.charAt(i)=='T') patt1=patt1.substring (0,i) + '[Tt]' + patt1.substring (i+1,patt1.length)
            if (patt1.charAt(i)=='G') patt1=patt1.substring (0,i) + '[Gg]' + patt1.substring (i+1,patt1.length)
            if (patt1.charAt(i)=='H') patt1=patt1.substring (0,i) + '[Hh]' + patt1.substring (i+1,patt1.length)
            //if (patt1.charAt(i)=='"') patt1=patt1.substring (0,i) + '\"' + patt1.substring (i+1,patt1.length)
            if (patt1.charAt(i)=='"') patt1=patt1.substring (0,i) + '(\"|\'\')' + patt1.substring (i+1,patt1.length)
            if (patt1.charAt(i)=="'") patt1=patt1.substring (0,i) + "\'" + patt1.substring (i+1,patt1.length)
         }
     //alert (patt1)
     patt+="|_[RSPDFGHIJKLMrspdfghijklm]|_[0-9]+|!!|!-?[0-9]+"
     patt1+="|_[RSPDFGHIJKLMrspdfghijklm]?|_[0-9]+|!!|!-?[0-9]*"
     patt1=" *((("+patt+") +)*("+patt1+")?)|\\^[0-9]+ *|\\^"
     finalpattern="^("+" *(("+patt+") +)*("+patt+") *"+"$)|\\^[0-9]+ *$"
     //finalpattern="^"+" *(("+patt+") +)+("+patt+") *"+"$"
     var str="<THEAD><TR><TD><TD class=prod>Product<SUB style='visibility:hidden'>0</SUB><TD><TD class=sum>Sum<SUB style='visibility:hidden'>0</SUB>"
     for (i=0;i<group.nclass;i++) { str+= '<TD class="psop'+(group.sop0[i].length==1?' short':'')+'" onClick="toggle_product_column(this)" onMouseOver="highlight_product_column(this,true)" onMouseOut="highlight_product_column(this,false)">'+group.sop[i] }
     str+="<TD></THEAD><TBODY><TR class=space>"+repeat("<TD>",group.nclass+4)+"</TBODY>"
     form.innerHTML= '<H2 class=stickleft id=h_product>Decompose direct products of two or more irreducible representations into a direct sum of irreducible representations</H2><DIV class=stickleft><P>Specify a product by any number of irreducible representations. Enter the names of irreducible representations in pure ASCII as '+irrepex.replace(/([ABETGH][123]?[gu]?['"]?)/g,"<TT>$1</TT>") +
      ((group.orig[0].charAt(group.orig[0].length-1) == "'")?". Use a single quote for a single prime and a double quote (or two single quotes) for a double prime":"") + ".<P style='display:none'>Moreover, you can also enter the (usually reducible) representations of a spherical harmonic (up to ℓ=10) using the symbols <TT>_p</TT>, <TT>_d</TT>, <TT>_f</TT> …, or <TT>_r</TT> for the Cartesian rotations. Lastly, the input <TT>^&lt;num&gt;</TT> will calculate an integer positive power of the previous result.  These input options are experimental, but do work occasionally; beware of high numbers, because everything relies on JavaScript numerics.</DIV>" +
     '. <DIV id=products_container><TABLE border=0 id=products>'+repeat("<COL></COL>",group.nclass+4)+str+'<TBODY><TR><TD></TBODY></TABLE></DIV><DIV class=stickleft><INPUT id=mult_inp onChange="productform_submitter(this)" ><P style="display:none" id=productform_control><LABEL><INPUT type=checkbox onChange="set_prodtable_nowrap(this)" id=prod_nowrap> Prevent line breaks</LABEL>' +
     '<P style="xdisplay:none">Set font size in table to <INPUT type=number style="width:4em" step="any" pattern="[0-9]*\.[0-9]" id="set_font_size_products" class=setfontsize onChange="set_font_size(this)" value="'+parseInt(window.getComputedStyle(document.getElementById("reducetable"), "").getPropertyValue("font-size"))+'" defval="'+parseInt(window.getComputedStyle(document.getElementById("reducetable"), "").getPropertyValue("font-size"))+'"> px</DIV>' +
     '<HR><H2 class=stickleft id=h_product_table>Direct product table (for binary products only)</H2><P id=show_mult>The irreducible representation multiplication table is '+((group.nclass<50)?"quite":"very")+' large. <A href="javascript:show_multiplication(true,true,true,true)" >Click here to show it</A>. <DIV id=product_table_wrap></DIV> <DIV class=stickleft id=product_control></DIV>'
     document.getElementById("mult_inp").pattern=patt1
     document.getElementById("mult_inp").finalpattern=patt
     el=document.getElementById("productform").getElementsByClassName("sop")
     for (i=0; i<el.length;i++) {el[i].style.width="0.5em"}

     var powflag=false,o
     el=document.getElementsByClassName("sop")
     for (i=0; i<group.nclass;i++) 
         {
             o=el[i].orig
             if (!o) o=group.sop[i].replace(/<[^<>]*>/g,"")
             powflag=(powflag || (o.indexOf("^")>-1) || (o.indexOf("'")>-1))
         }
     if (!powflag) document.getElementById("products").className="nopow"

     if (group.nclass< 15) {show_multiplication()}
        else if (group.nclass<25 && group.orig[0].charAt(group.orig[0].length-1) == 'g') {show_multiplication (false,true,false)}
        else if (group.nclass<25 && group.orig[0].charAt(group.orig[0].length-1) == "'") {show_multiplication (false,false,true)}
        else if (group.nclass<15 ) {show_multiplication (true,false)}
        else if (group.nclass<30 && group.orig[0].charAt(group.orig[0].length-1) == 'g') {show_multiplication (true,true,true)}

     str=group.orig
     
     
     //alert (group.orig[0]+ " " + group.orig[0].charAt(group.orig[0].length-1) + " " +(group.orig[0].charAt(group.orig[0].length-1) != "'"))
     if (group.orig[0].charAt(group.orig[0].length-1) != "'") document.getElementById("productform").className="noprime"
     
}

function show_redform_ir (that) {if (that.checked) {document.getElementById("reduceform").getElementsByTagName("TBODY")[0].className+=' showir'} else {document.getElementById("reduceform").getElementsByTagName("TBODY")[0].className=document.getElementById("reduceform").getElementsByTagName("TBODY")[0].className.replace (/showir/g,' ').replace(/  */g,' ').replace(/ +$/,'')}}
function show_redform_raman (that) {if (that.checked) {document.getElementById("reduceform").getElementsByTagName("TBODY")[0].className+=' showraman'} else {document.getElementById("reduceform").getElementsByTagName("TBODY")[0].className=document.getElementById("reduceform").getElementsByTagName("TBODY")[0].className.replace (/showraman/g,' ').replace(/  */g,' ').replace(/ +$/,'')}}
function highlight_reduce_col () { highlight_reduce_col_both (this,true,false) }
function unhighlight_reduce_col () { highlight_reduce_col_both (this,false,false) }
function toggle_reduce_col () { highlight_reduce_col_both (this,false,true) }
function highlight_reduce_col_both (tthis,flag1, flag2)
   {
        e1=tthis.parentNode.parentNode.getElementsByClassName("sopcell")
        e2=document.getElementById("reduceform").getElementsByTagName("COL")
        if (document.getElementById("reduceform").getElementsByTagName("TABLE")[0].className!='chartabshown') return
        j=1

        for (i=0; i<e1.length;i++)
          {
             if (tthis==e1[i] && !flag2) e2[i+j].className=(flag1)?e2[i+j].className+" hover":e2[i+j].className.replace(/ *(hover|hooover) */g," ").replace(/  *$/,"")
             if (tthis==e1[i] && flag2) e2[i+j].className=(e2[i+j].className.indexOf("hoover")==-1)?e2[i+j].className+" hooover hoover":e2[i+j].className.replace(/ *ho+ver */g," ").replace(/  *$/,"")
          }
        document.getElementById("reduceform").getElementsByTagName("TABLE")[0].offsetHeight;
        if (navigator.appVersion.indexOf("Chrome")>-1  )
           {
              hide_characters()
              document.getElementById("reduceform").getElementsByTagName("TABLE")[0].offsetHeight;
              show_characters()
           }
   }

group.thresh=false
var finalpattern



function onkeypress_clear () 
   {
      this.onkeypress=""; 
      this.className=this.className.replace (/ *invalid */,' ').replace (/ *$/,"").replace (/^ */,"")
      return
   }

function productform_submitter_dum (x) {return false}
function set_prodtable_nowrap(that) {document.getElementById("products").style.whiteSpace=(that.checked?"nowrap":"normal")}

function productform_submitter (x) 
   { 
       var e=document.getElementById("mult_inp"),el
       if (!e.oldvalues) e.oldvalues=new Array
       if (!e.oldprodchars) e.oldprodchars=new Array
       if (!e.oldexp) e.oldexp=new Array
       if (e.value.match(/^ *$/)) return
       var re=RegExp('^('+e.pattern+')$')
       if (!re.test(e.value)) {return false}
       //alert (e.pattern+" match="+e.value.match(re))
       re=RegExp(finalpattern)
       if (!re.test(e.value)) {e.className="invalid"; e.onkeypress=onkeypress_clear; return false}
       if (e.value.charAt(0)=="^" && !e.oldvalues.length) {e.className="invalid"; e.onkeypress=onkeypress_clear; return false}
       if (el=document.getElementById("products").getElementsByClassName("flicker")[0]) el.className=el.className.replace (/flicker */,"")
       e.className=""
       var prodchar=new Array()
       var str='<TD onClick="toggle_product_row(this)" onMouseOut="unhighlight_product_row(this)" class=num><DIV class=grad></DIV><SPAN>'+ (document.getElementById("products").getElementsByTagName("TBODY")[0].getElementsByTagName("TR").length) +"</SPAN></TD>"
       if (e.value.charAt(0)=="^")
          {
              var ex=parseInt(e.value.substring(1,e.value.length)) 
              var ex1=ex * parseInt(e.oldexp[e.oldexp.length-1])
              e.oldexp[e.oldexp.length]=ex1
              for (i=0;i<group.nclass;i++)
                  {
                     prodchar[i]=power(e.oldprodchars[e.oldprodchars.length-1][i] , ex)
                  }
              str+="<TD class=prod><SPAN class=brack>[</SPAN>"+e.oldvalues[e.oldvalues.length-1]+"<SPAN class=brack>]</SPAN><SUP>"+ex1+"</SUP>"
              e.oldprodchars[e.oldprodchars.length]=prodchar
              e.oldvalues[e.oldvalues.length]=e.oldvalues[e.oldvalues.length-1]
          }
        else
          {
              for (i=e.value.length-1;i>=0;i--)
                  {
                      if (e.value.charAt(i)=='a') e.value=e.value.substring (0,i) + 'A' + e.value.substring (i+1,e.value.length)
                      if (e.value.charAt(i)=='b') e.value=e.value.substring (0,i) + 'B' + e.value.substring (i+1,e.value.length)
                      if (e.value.charAt(i)=='e') e.value=e.value.substring (0,i) + 'E' + e.value.substring (i+1,e.value.length)
                      if (e.value.charAt(i)=='t') e.value=e.value.substring (0,i) + 'T' + e.value.substring (i+1,e.value.length)
                      if (e.value.substr(i,2)=="''") e.value=e.value.substring (0,i) + '"' + e.value.substring (i+2,e.value.length)
                      if (e.value.charAt(i)=='g' && (i==0 || e.value.charAt(i-1)==" " && e.value.charAt(i-1)!="_")) e.value=e.value.substring (0,i) + 'G' + e.value.substring (i+1,e.value.length)
                      if (e.value.charAt(i)=='h' && (i==0 || e.value.charAt(i-1)!="_")) e.value=e.value.substring (0,i) + 'H' + e.value.substring (i+1,e.value.length)
                      if (e.value.charAt(i)==' ' && (i==0 || i==e.value.length-1 || e.value.charAt(i-1)==" ")) e.value=e.value.substring (0,i) + e.value.substring (i+1,e.value.length)
                      if (e.value.charAt(i).match(/[SPDFGHIJLKMR]/) && (i>0 && e.value.charAt(i-1)=="_")) e.value=e.value.substring (0,i) + e.value.charAt(i).toLowerCase() + e.value.substring (i+1,e.value.length)
                  }
              var factors=e.value.split(" ")
              for (i=0;i<factors.length;i++) 
                   {
                      if (factors[i]=="!!") factors[i]="!"+(e.oldprodchars.length) 
                      if (factors[i].match(/^!-[0-9]+$/)) factors[i]='!'+(e.oldprodchars.length+1-parseInt(factors[i].match(/[0-9]+/)))
                   }
              for (i=0; i<group.nclass; i++) 
                  {
                     prodchar[i]=1
                     for (j=0; j<factors.length;j++) 
                      try
                         {
                             if (factors[j].charAt(0)=="_") { prodchar[i] *= group.spherical[factors[j].match(/[A-Za-z]|[1-9][0-9]*|0$/).toString().toLowerCase()][i] }
                               else if (factors[j].charAt(0)=="!") { prodchar[i] *= e.oldprodchars[parseInt(factors[j].match(/[1-9][0-9]*$/))-1][i] }
                               else { prodchar[i] *= group.chartab[factors[j]][i] }
                         }
                      catch (foo) {e.className="invalid"; e.onkeypress=onkeypress_clear; return false}
                  }
              e.oldprodchars[e.oldprodchars.length]=prodchar
              e.oldexp[e.oldexp.length]=1
              var str1=(factors[0].match(/^[_!]/)?factors[0].toUpperCase():group.irrep[factors[0]])
              for (i=1;i<factors.length;i++) {str1 += ' \u2297 ' + (factors[i].match(/^[_!]/)?factors[i].toUpperCase():group.irrep[factors[i]]) }
              str1=str1.replace(/_([A-Z])/g, "&Gamma;($1)").replace (/&Gamma;\(R\)/g, "&Gamma;(Rot)").replace(/_([0-9]+)/g,"&Gamma;(<SPAN>Y</SPAN><SUP class=lexp>ℓ=$1</SUP>)").replace(/!([0-9]+)/g,"<SPAN class=line>Line $1</SPAN>")
              e.oldvalues[e.oldvalues.length]=str1
              str+='<TD class=prod>'+str1
          }

        el=document.getElementById("products").getElementsByTagName("TBODY")[0]
        document.getElementById("products").style.display="table"
        document.getElementById("set_font_size_products").parentNode.style.display="block"
        var ec, extraclass
        ec=document.getElementById("products").getElementsByTagName("COL")

        str+="</TD><TD class=eq>=</TD><TD class=sum>"+decompose(prodchar)+"</TD>"
        for (i=0;i<group.nclass;i++) 
             {    
                  pi=parseInt(prodchar[i]+0.5*Math.sign(prodchar[i]))
                  extraclass=(ec[4+i].className.match(/hiighlight/)?" colstyle":"")
                  if (group.intsop[i])
                     {
                        if (pi<0) str += '<TD class="char int'+extraclass+'"><SPAN class=int><SPAN><SPAN class="sign">−</SPAN>'+Math.abs(pi).toString().replace(/([0-9]*)([0-9])$/,"<SPAN class=inthigh>$1</SPAN><SPAN class=intlow>$2</SPAN>").replace(/<SPAN class=inthigh><\/SPAN>/,"")+'</SPAN></SPAN></TD>'
                        else str += '<TD class="char int'+extraclass+'"><SPAN class=int><SPAN><SPAN class="signplus sign">+</SPAN>'+pi.toString().replace(/([0-9]*)([0-9])$/,"<SPAN class=inthigh>$1</SPAN><SPAN class=intlow>$2</SPAN>").replace(/<SPAN class=inthigh><\/SPAN>/,"")+'</SPAN></SPAN></TD>'
                     }
                   else if (Math.abs(prodchar[i]-pi) < 0.0001)
                     {
                        if (pi<0) str += '<TD class="char float floatint'+extraclass+'"><SPAN class=int><SPAN><SPAN class="sign">−</SPAN>'+Math.abs(pi)+'</SPAN></SPAN></TD>'
                        else str += '<TD class="char float floatint'+extraclass+'"><SPAN class=int><SPAN><SPAN class="signplus sign">+</SPAN>'+pi+'</SPAN></SPAN></TD>'
                     }
                   else
                     {
                        if (prodchar[i]>=0) str += '<TD class="char float'+extraclass+'"><SPAN class=float><SPAN class="signplus sign">+</SPAN><SPAN class=pre>'
                         else str += '<TD class="char float'+extraclass+'"><SPAN class=float><SPAN class="sign">−</SPAN><SPAN class=pre>'
                        str += Math.smartroundfix(Math.abs(prodchar[i]),4).replace(/\./, "</SPAN><SPAN class=decpoint>.</SPAN><SPAN class=post>")+'</SPAN></TD>'
                     }
              }



        if (navigator.appVersion.indexOf("MSIE")>0) {tr=document.createElement("TR"); set_tr_innerhtml_ie (tr, el, str)}
           else { el.innerHTML += '<TR class=flicker>' + str }

        if (document.getElementById("products").getElementsByTagName("TBODY")[0].getElementsByClassName("colstyle").length>0) setTimeout ("clean_extraclass()",2000)
                   
        var tw=parseInt(window.getComputedStyle(el.parentNode.parentNode, "").getPropertyValue("width"))
        var cw=parseInt(window.getComputedStyle(el.parentNode.parentNode.parentNode, "").getPropertyValue("width"))
        //console.log ("product_form_submitter: tw="+el.parentNode.parentNode+" "+tw+"  cw="+el.parentNode.parentNode.parentNode+" "+cw+"  "+(tw>=cw?"block":"none"))
        e=document.getElementById("productform_control")
        if (tw>=cw)
           {
              e.style.display= (tw>=cw?"block":"none")
              e.firstChild.offsetHeight
              e.firstChild.style.backgroundColor="transparent"
              e.firstChild.style.boxShadow="rgba(255,0,0,0) 0px 0px 0px 0px"
           }
         else
           {
              e.style.display= (tw>=cw?"block":"none")
              e.firstChild.style.backgroundColor=""
              e.firstChild.style.boxShadow=""
           }
   }

function clean_extraclass() 
    {
        var el=document.getElementById("products").getElementsByTagName("TBODY")[0].getElementsByClassName("colstyle");
        for (; el.length>0 ;) el[0].className=el[0].className.replace(/ colstyle/,"") 
    }

function power (a,b) {var i,c=1; for (i=0;i<b;i++) c*=a; return c}

function decompose (prod,return_coeff)
   {
       var nirrep=new Array()
       var str="",i,j
       for (i=0; i<group.nclass; i++)
           {
               nirrep[i]=0
               for (j=0; j<group.nclass; j++)
                   {
                       nirrep[i]+=group.sopfact[j]*prod[j]*group.chartab[i][j]
                   }
               nirrep[i]=parseInt(nirrep[i]/group.irrepfact[i]/group.grporder+0.5)
           }

        if (return_coeff) return nirrep
        var flag=false
        for (i=0; i<group.nclass; i++)
            {
                if (nirrep[i] != 0)
                   {
                      if (flag) str+=" \u2295 "
                      flag=true
                      if (nirrep[i] > 1) {str+="<NOBR><SPAN>"+nirrep[i]+"</SPAN>&nbsp;"+group.irrep[i]+"</NOBR>"}
                             else        {str+=group.irrep[i]}
                   }
            }
         return str
   }

function show_multiplication (f1,f2,f3,f4)
  {
     e1=document.getElementById("show_mult")
     e2=document.getElementById("product_table_wrap")
     var str="<TABLE id=product_table><COL></COL>"
     for (i=0; i<group.nclass; i++) { str += "<COL class=cg></COL>" }
     str+="<COL></COL><THEAD><TR><TD class=corner>"
     for (i=0; i<group.nclass; i++) { str += '<TD class=irrep onClick="toggle_product_column(this)" onMouseOver="highlight_product_column(this,true)" onMouseOut="highlight_product_column(this,false)" >'+group.irrep[i] }
     str += "<TD class=corner></THEAD><TFOOT><TR><TD class=corner>"
     for (i=0; i<group.nclass; i++) { str += '<TD class=irrep onClick="toggle_product_column(this)" onMouseOver="highlight_product_column(this,true)" onMouseOut="highlight_product_column(this,false)">'+group.irrep[i] }
     str += "<TD class=corner></TFOOT><TBODY><TR class=spacer><TD>"
     for (i=0;i<group.nclass;i++) str += '<TD  onMouseOver="highlight_product_column(this,true)" onMouseOut="highlight_product_column(this,false)">'
     str += '<TD>'
     var prodchar=new Array(), ascii
     var prodchar2=new Array()
     var pi=4*Math.atan(1)
     var flag=true
     //alert (group.angle)
     for (i=0; i<group.nclass; i++) 
         {
            str += '<TR><TD onMouseOut="unhighlight_product_row(this)" onClick="toggle_product_row(this)" class=irrep>' + group.irrep[i]
            for (j=0; j<group.nclass; j++)
                {
                  raman=0
                  dipole=0
                  for (k=0; k<group.nclass; k++) 
                      {
                         prodchar[k] = group.chartab[i][k] * group.chartab[j][k]
                         dipole += prodchar[k] * (Math.sign(group.angle[k])+2*Math.cos(group.angle[k]))*group.sopfact[k]
                         raman  += prodchar[k] * (2+Math.sign(group.angle[k])*2*Math.cos(group.angle[k])+2*Math.cos(2*group.angle[k]))*group.sopfact[k]
                      }
                   classname="p"
                   if (Math.abs(dipole)>0.001) classname+=" dipole"
                   if (Math.abs(raman)>0.001) classname+=" raman"
                   if (j==group.nclass-1) classname+=" last"
                   ascii=group.orig[i]+" \u2297 "+group.orig[j]
                   for (k=ascii.length-1;k>=0;k--) {if (ascii.charAt(k)=='"') ascii=ascii.substring (0,k) + "''" + ascii.substring (k+1,ascii.length)}
                   var decstr=decompose (prodchar)
                   if (i==j && group.chartab[i][0] > 1.1)
                     {
                       for (k=0;k<group.nclass;k++)
                         {
                            ang=Math.abs(2*group.angle[k])
                            prodchar2[k]=1/0
                            if (ang>2*pi) ang=ang-2*pi
                            for (l=0; l<group.nclass;l++)
                               {
                                   if (((Math.abs(ang - group.angle[l]) < 0.00001) || (Math.abs(2*pi - ang - group.angle[l]) < 0.00001)) && (l==0 || group.sopfact[l]==group.sopfact[k] || 2*group.sopfact[l]==group.sopfact[k]) )  break
                               }
                            if (l==group.nclass)
                               {
                                 window.alert ("Vaffanculo: No angle found for sop "+k+" "+ang+"   "+group.angle+". Results bogus")
                               }
                             else
                               {
                                  //if (flag) alert (i+" "+j+"Angle found: sop "+k+"  squared is "+l+"    "+ang+"  "+group.angle)
                                  prodchar2[k]=(prodchar[k] - group.chartab[i][l])/2
                               }
                         }
                       //alert (prodchar2)
                       flag=false
                       nfull=decompose (prodchar,true)
                       nasm=decompose (prodchar2,true)
                       flag=true
                       //alert (nfull+"   "+nasm)
                       decstr=""
                       for (k=0;k<group.nclass;k++)
                           {
                               if (!flag && nfull[k]>0) {decstr+= " ⊕ "; flag=false}
                               flag=false
                               //alert ("Prod="+i+" "+j+"  result="+nfull+"   asm="+nasm+"  loop="+k+" "+nfull[k]+" "+nasm[k])
                               if (nfull[k]==1 && nasm[k]==0) decstr += group.irrep[k]
                                 else  if (nfull[k]==0 && nasm[k]==0) decstr += ' '
                                 else  if (nfull[k]==1 && nasm[k]==1) decstr += '<NOBR>['+group.irrep[k]+']</NOBR>'
                                 else  if (nfull[k]>1 && nasm[k]==0) decstr += "<NOBR><SPAN>"+nfull[k]+"</SPAN>&nbsp;"+group.irrep[k]+"</NOBR>"
                                 else  if (nfull[k]==2 && nasm[k]==1 && (group.grpsym.replace(/<[^<>]*>/g,"").charAt(0)=="I")) decstr += '<NOBR>['+ group.irrep[k] + "]</NORB> ⊕ " + group.irrep[k] 
                                 else  if (nfull[k]==2 && nasm[k]==1) decstr += group.irrep[k] + " ⊕ <NOBR>[" + group.irrep[k] + ']</NOBR>'
                                 else  if (nfull[k]>2 && nasm[k]==1) decstr += "<NOBR><SPAN>"+(nfull[k]-1)+"</SPAN>&nbsp;"+group.irrep[k]+"</NOBR> ⊕ <NOBR>[" + group.irrep[k] + ']</NOBR>'
                                 else  if (nfull[k]>3 && nasm[k]>1) decstr += "<NOBR><SPAN>"+(nfull[k]-nasm[k])+"</SPAN>&nbsp;"+group.irrep[k]+"</NOBR> ⊕ <NOBR>[<SPAN>"+nasm[k]+"</SPAN>&nbsp;"+group.irrep[k]+"]</NOBR>"
                                 else {alert ("Vaffanculo!!!");return}
                           }
                     }
                   str += '<TD class="'+classname+'" xtitle="'+ascii+'" onMouseOver="highlight_product_column(this,true)" onMouseOut="highlight_product_column(this,false)">'+
                          '<DIV class="grad dipole">&nbsp;</DIV><DIV class="grad raman">&nbsp;</DIV><DIV class="grad both">&nbsp;&nbsp;</DIV><SPAN>' + decstr+"</SPAN>"
                }
            str += '<TD onMouseOut="unhighlight_product_row(this)" onClick="toggle_product_row(this)" class=irrep>' + group.irrep[i]
         }
      str += "<TR class=spacer><TD>"
      for (i=0;i<group.nclass;i++) str += '<TD  onMouseOver="highlight_product_column(this,true)" onMouseOut="highlight_product_column(this,false)">'
      
      str += "<TD></TBODY></TABLE>"
      e2.innerHTML=str
      e1.style.display="none"
      e2.style.display="block"
      e2.firstChild.style.display="table"

      e3=document.getElementById("product_control")
      str=''
      for (i=0; i<group.nclass; i++) { if (group.orig[i].charAt(0) != 'A' && group.orig[i].charAt(0) != 'B' && group.nclass>5) { str = '<P class=labelp><LABEL><INPUT onChange="refine_product_table()" type=checkbox id=show_mult_deg> Show only products between degenerate irreducible representations</LABEL>'; break}}
      if (group.orig[0].charAt(group.orig[0].length-1) == 'g' && group.nclass>5)  str += '<P class=labelp><LABEL><INPUT onChange="refine_product_table()" type=checkbox id=show_mult_par> Show only products between irreducible representations of <I>gerade</I> parity</LABEL>'
      if (group.orig[0].charAt(group.orig[0].length-1) == "'" && group.nclass>5)  str += '<P class=labelp><LABEL><INPUT onChange="refine_product_table()" type=checkbox id=show_mult_prime> Show only products between “singly primed” irreducible representations </LABEL>'
      if (true)  str += '<P class=labelp><LABEL><INPUT onChange="refine_product_table()" type=checkbox id=show_mult_tooltip> Show tooltips when hovering over a table cell</LABEL>'
      if (group.nclass>4 || group.grpsym.replace(/<[^<>]*>/g,"").charAt(0).match(/[ITO]/))  str += '<P class=labelp><LABEL><INPUT onChange="refine_product_table()" type=checkbox id=show_mult_diag> Highlight diagonal entries</LABEL>'
      if (true)  str += '<P class=labelp><LABEL><INPUT onChange="refine_product_table()" type=checkbox id=show_mult_dipole> Mark allowed dipole transitions (white)</LABEL>'
      if (true)  str += '<P class=labelp><LABEL><INPUT onChange="refine_product_table()" type=checkbox id=show_mult_raman> Mark allowed Raman transitions (yellow)</LABEL>'
      if (group.nclass>15)  str += '<P class=labelp><LABEL><INPUT onChange="toggle_transitions(this)" '+(group.nclass>30 || group.nclass>20 && navigator.userAgent.match(/Gecko/) && !navigator.userAgent.match(/WebKit/)?"checked ":"")+'type=checkbox id=toggle_trans_pt> Disable soft transition effects on hovering</LABEL>'
      el=document.getElementById("product_table")
      try {if (group.nclass>10 || group.grpname.match(/Ih/)) str+='<P class=labelp>Set font size in table to <INPUT type=number style="width:4em" step="any" pattern="[0-9]*\.[0-9]" id="set_font_size_product_table" class=setfontsize onChange="set_font_size(this)" value="'+parseInt(window.getComputedStyle(el, "").getPropertyValue("font-size"))+'" defval="'+parseInt(window.getComputedStyle(el, "").getPropertyValue("font-size"))+'"> px'} catch (foo) {}

      for (i=0; i<group.nclass; i++) { if (group.orig[i].charAt(0) != 'A' && group.orig[i].charAt(0) != 'B') {str += "<P style='margin-top:1em'>In the products of two identical degenerate representations, those terms antisymmetric with respect to particle permutation  are indicated by square brackets.";break}}
      e3.innerHTML = str

      if (f1 && (e=document.getElementById("show_mult_deg"))) e.checked=true
      if (f2 && (e=document.getElementById("show_mult_par"))) e.checked=true
      if (f3 && (e=document.getElementById("show_mult_prime"))) e.checked=true
      if (f4 && (e=document.getElementById("show_mult_tooltip"))) e.checked=true

      e1=document.getElementById("productform").getElementsByClassName("setfontsize")[0]; if(e1) {e1.value=0; e1.onchange()  }
      refine_product_table()
      
   }

function toggle_transitions (that)
   {
       var cn=that.id.replace(/toggle_trans/,"notransitions")
       var e=document.getElementsByTagName("BODY")[0]
       if (that.checked) e.className= (e.className+" "+cn).replace(/^ +/,"")
        else e.className=e.className.replace(cn,"").replace (/^ | $/,"")
   }

function highlight_product_column (e, flag)
  {
     esib=e.parentNode.getElementsByTagName("TD")
     ecg=e.parentNode.parentNode.parentNode.getElementsByTagName("COL")
     ehead=e.parentNode.parentNode.parentNode.getElementsByTagName("THEAD")[0].getElementsByTagName("TD")
     if (e.parentNode.parentNode.parentNode.getElementsByTagName("TFOOT").length) {efoot=e.parentNode.parentNode.parentNode.getElementsByTagName("TFOOT")[0].getElementsByTagName("TD")} else {efoot=false}
     j=0
     for (i=1; i<esib.length-1; i++)
         {
             if (ehead[i].style.display != "none") {j++; ecg[j].className = (esib[i] == e && flag) ? ecg[j].className+" highlight" : ecg[j].className.replace (/ *(un)?highlight */g," ").replace(/  *$/,"")}
             ehead[i].className = (esib[i] == e && flag) ? ehead[i].className+" highlight" : ehead[i].className.replace(/highlight/g,"").replace(/  *$/,"")
             if (efoot) efoot[i].className = (esib[i] == e && flag) ? efoot[i].className+" highlight" : efoot[i].className.replace(/highlight/g,"").replace(/  *$/,"")
             if(efoot && ehead.length==2*efoot.length) {ehead[efoot.length+i].className= (esib[i] == e && flag) ? ehead[efoot.length+i].className+" highlight" : ehead[efoot.length+i].className.replace(/highlight/g,"").replace(/  *$/,"")}
         }
  }

function unhighlight_product_row (e)
 {
    e.parentNode.className = e.parentNode.className.replace (/ *unhighlight */g," ").replace(/  *$/,"")
 }

function toggle_product_row (e)
 {
    if (e.parentNode.className.indexOf("flicker")>-1) {e.parentNode.className = ""; e.parentNode.offsetHeight}
    if (e.parentNode.className.indexOf("hiighlight")< 0) e.parentNode.className = "hiighlight hiighliight"
      else    e.parentNode.className = "unhighlight"
 }

function toggle_product_column (e)
 {
     esib=e.parentNode.getElementsByTagName("TD")
     ecg=e.parentNode.parentNode.parentNode.getElementsByTagName("COL")
     ehead=e.parentNode.parentNode.parentNode.getElementsByTagName("THEAD")[0].getElementsByTagName("TD")
     if (e.parentNode.parentNode.parentNode.getElementsByTagName("TFOOT").length) {efoot=e.parentNode.parentNode.parentNode.getElementsByTagName("TFOOT")[0].getElementsByTagName("TD")} else {efoot=false}
     j=0
     for (i=1; i<esib.length-1; i++)
         {
             if (ehead[i].style.display != "none") 
                {
                  j++; 
                  if (esib[i] == e) 
                     {
                        if (ecg[j].className.indexOf("hiighlight")>=0)
                           {
                                 ecg[j].className = ecg[j].className.replace (/ *hi+ghli+ght */g," ").replace(/  *$/,"") 
                                 ehead[i].className=ehead[i].className.replace (/ *hi+ghli+ght */g," ").replace(/  *$/,"")
                                 if (efoot) efoot[i].className=efoot[i].className.replace (/ *hi+ghli+ght */g," ").replace(/  *$/,"")
                                 if(efoot && ehead.length==2*efoot.length) {ehead[efoot.length+i].className= ehead[efoot.length+i].className.replace(/highlight/g,"").replace(/  *$/,"")}
                           }
                         else
                           {
                                 ecg[j].className += " hiighlight hiighliight"
                                 ehead[i].className+=" highlight"
                                 if (efoot) efoot[i].className+=" highlight"
                                 if(efoot && ehead.length==2*efoot.length) {ehead[efoot.length+i].className+=" highlight"}

                           }
                        ecg[i].className = (ecg[i].className.indexOf("truehiigh")>=0)?ecg[i].className.replace (/ *truehiigh */g," ").replace(/  *$/,"") :ecg[i].className+" truehiigh"
                     }
                }
         }
 }

function refine_product_table ()
  {
     e1=document.getElementById("show_mult_deg")
     e2=document.getElementById("show_mult_par")
     e3=document.getElementById("show_mult_prime")
     e4=document.getElementById("show_mult_tooltip")
     e5=document.getElementById("show_mult_diag")
     e6=document.getElementById("show_mult_dipole")
     e7=document.getElementById("show_mult_raman")

     er=document.getElementById("product_table").getElementsByTagName("TBODY")[0].getElementsByTagName("TR")
     ed=document.getElementById("product_table").getElementsByTagName("TBODY")[0].getElementsByTagName("TD")
     ec=document.getElementById("product_table").getElementsByTagName("COL")
     eh=document.getElementById("product_table").getElementsByTagName("THEAD")[0].getElementsByTagName("TD")
     ef=document.getElementById("product_table").getElementsByTagName("TFOOT")[0].getElementsByTagName("TD")

     extraline=1


     for (i=0; i<0*group.nclass;i++)
        {
           //flag=(!(e1&&e1.checked) || !(group.orig[i].charAt(0)=='A'||group.orig[i].charAt(0)=='B')) && (!(e2&&e2.checked) || !(group.orig[i].charAt(group.orig[i].length-1)=='u'))
           //alert (group.orig[i]+" " +(!(e1&&e1.checked)) + " " + (!(group.orig[i].charAt(0)=='A'||group.orig[i].charAt(0)=='B'))+ " " + (!(e2&&e2.checked)) + " " + (!(group.orig[i].charAt(group.orig[i].length-1)=='u'))+ "   "+ flag)
           //er[i].style.visibility=(flag)?"visible":"collapse"
           //ec[i+1].style.visibility=(flag)?"visible":"collapse"
           // why the fuck does this not work?
        }


      var displ=new Array(), hii=new Array(), dold=new Array(), truehii=new Array(),idx=new Array()
      var ii=0
      for (i=0; i<group.nclass; i++) 
          {
              displ[i]=((!(e1&&e1.checked) || !(group.orig[i].charAt(0)=='A'||group.orig[i].charAt(0)=='B')) && (!(e2&&e2.checked) || !(group.orig[i].charAt(group.orig[i].length-1)=='u')) && (!(e3&&e3.checked) || !(group.orig[i].charAt(group.orig[i].length-1)=='"')))
              hii[i]=(ec[i+1].className.indexOf("hiighlight")>-1)
              truehii[i]=(ec[i+1].className.indexOf("truehiigh")>-1)
              dold[i]=(er[i].style.display=="")
              if (displ[i]) idx[idx.length]=i
          }

      jj=0
      //alert(hii)
      for (i=0; i<group.nclass; i++) 
          {
              ii=i
              if (displ[i])
                 {
                     er[i+extraline].style.display=""
                     er[i+extraline].className=er[i+extraline].className.replace (/ *hiighliight */g," ").replace(/  *$/,"")
                     for (j=0;j<group.nclass;j++) er[i+extraline].getElementsByTagName("TD")[j+1].style.display=(displ[j])?"":"none"
                     ec[jj+1].style.transition="none"
                       ec[jj+1].className=(ec[i+1].className.indexOf("truehiigh")>-1)?ec[jj+1].className+" hiighlight":ec[jj+1].className.replace (/ *hiighli+ght */g," ").replace(/  *$/,"")
                     ec[jj+1].offsetHeight
                     ec[jj+1].style.transition=""
                     jj++
                 }
               else
                 {
                     er[i+extraline].style.display="none"
                     ec[i+1].style.transition="none"
                     ec[i+1].className=ec[i+1].className.replace (/ *hiighli+ght */g," ").replace(/  *$/,"")
                     ec[i+1].offsetHeight
                     ec[i+1].style.transition=""
                     
                     //hii[i]=false
                 }
              for (j=0;j<group.nclass;j++) er[0].getElementsByTagName("TD")[j+1].style.display=(displ[j])?"":"none"
              for (j=0;j<group.nclass;j++) er[er.length-1].getElementsByTagName("TD")[j+1].style.display=(displ[j])?"":"none"
              ec[jj+1].style.transition="none"
              ec[jj+1].className=ec[jj+1].className.replace (/ *hiighli+ght */g," ").replace(/  *$/,"")
              ec[jj+1].offsetHeight
              ec[jj+1].style.transition=""

              eh[i+1].style.display=(displ[i])?"":"none"
              ef[i+1].style.display=(displ[i])?"":"none"
           }
             
      
      //if (!ed[2].attributes.xtitle) {e4.style.display="none"}
       //else
          {
              for (i=0; i<ed.length; i++) 
                 {
                     if (ed[i].attributes.xtitle) ed[i].title=(e4.checked)?ed[i].attributes.xtitle.value:""
                 }
          }
           
     if (e5)
       {
          for (i=0;i<group.nclass;i++)
            {
               if (e5.checked) {if (!er[i+1].getElementsByClassName("p")[i].className.match(/diag/)) er[i+1].getElementsByClassName("p")[i].className+= " diag"}
                 else {er[i+1].getElementsByClassName("p")[i].className= er[i+1].getElementsByClassName("p")[i].className.replace (/ diag/,"")}
            }
       }

     for (i=0;i<ed.length;i++) 
         {
            if (ed[i].className.match(/(dipole|raman)/))
               {
                   var x=ed[i].className
                   ed[i].className=x.replace(/show(dipole|raman)/g," ").replace(/  */g," ").replace(/ *$/,"") + ((x.match(/dipole/) && e6.checked)?" showdipole":"") + ((x.match(/raman/) && e7.checked)?" showraman":"")
               }
         }

     if (e2 && e6) {e6.disabled=  e2.checked?"disabled":""; e6.parentNode.className=e2.checked?"inactive":""}
  }


function do_project(input,dontpurge)
{
    var chaar=new Array()
    var row=input.parentNode.parentNode


    if (e=document.getElementById("removerottrans")) e.parentElement.removeChild(e)
// Test input validity

    var p=input.pattern
    if (!p) p=input.attributes["pattern"].value
    if (p)
      {
         var patt=new RegExp("@"+p+"@")
         //alert (p+"  "+input.value)

        //alert (/^ *[-@#+]+ *$/.test(input.value))

         if (((patt.test("@"+input.value+"@") && ! /^[+-]$/.test(input.value) ) || /^ *$/.test(input.value)) && ! /^ *[-@#+]+ *$/.test(input.value) )
            {
               input.className="sopcl"
               if (/^ *$/.test(input.value)) {input.value=''}
            }
          else
            {
               input.className="sopcl invalid"
               input.onkeypress=onkeypress_clear
               input.focus();
               return 
            }
      }



// Is all data valid?

    inp=row.getElementsByTagName("INPUT")
    if (inp.length != group.nclass) {alert ("Sorry, something has gone terribly wrong: inp.length="+inp.length+"   group.nclass="+group.nclass);return}
    for (i=0; i<group.nclass;i++)
        {
             if (inp[i].value && inp[i].className.indexOf("invalid")<0) chaar[i]=inp[i].value
               else return
        }
    if (row.className == "disabled") return

    for (i=0; i<group.nclass;i++)
        {
             if (/^  *#/.test(inp[i].value)) {for (;inp[i].value.charAt(0)==' ';) {if (inp[i].value.charAt(0)==' ') inp[i].value=inp[i].value.substring(1,inp[i].value.length)}}
             if (inp[i].value.charAt(0) == '#') chaar[i] = (inp[i].value = parseInt(inp[i].value.substring(1,inp[i].value.length),10) * group.xyz[i])
             inp[i].style.textAlign =  (Math.abs(inp[i].value-parseInt(inp[i].value)) < 0.000001)?"center":"left"
             inp[i].style.paddingLeft =  (Math.abs(inp[i].value-parseInt(inp[i].value)) < 0.000001)?"0px":"3px"
        }



// Process Input: Calculate coeffcients 

    var nirrep=new Array()
    for (i=0; i<group.nclass; i++)
        {
            nirrep[i]=0
            for (j=0; j<group.nclass; j++)
                {
                    nirrep[i]+=group.sopfact[j]*chaar[j]*group.chartab[i][j]
                }
            nirrep[i]=nirrep[i]/group.irrepfact[i]/group.grporder
        }

// Check whether coefficients are integer (or near-integer)
     
    if (!group.thresh) {if (group.cryst) {group.thresh=0.000001} else {group.thresh=0.0001}}
    var maxerr=0,q=0
    for (i=0; i<group.nclass;i++)
        {
            q=Math.abs(parseInt(nirrep[i]+0.5)-nirrep[i])
            if (q>maxerr) maxerr = q
            nirrep[i]=parseInt(nirrep[i]+0.1)
        }
    
    if (maxerr>group.thresh)
       {
            q=maxerr+' '
            for (j=0;j<q.length;j++){if (q.charAt(j)!="0" && q.charAt(j)!='.') break}
            j++;j++;if (j<5) j=5
            q=q.substring(0,j)
            if (group.cryst) 
               {
                  row.getElementsByClassName("status")[0].innerHTML= "Conversion to integer failed by <SPAN class=red>"+q+"</SPAN>."
               }
             else
               {
                  row.getElementsByClassName("status")[0].innerHTML= "Conversion to integer failed by <SPAN class=red>"+q+"</SPAN>"
                  row.getElementsByClassName("status")[0].innerHTML+=' (<A href="javascript:input_thresh()">set threshold'+'</A>).'
               }
            return
       }

// Check for consistent dimensionality

    var dim=0
    for (i=0; i<group.nclass;i++)
        {
            dim+=nirrep[i]*group.chartab[i][0]
        }

    if (dim != chaar[0])
       {
           row.getElementsByClassName("status")[0].innerHTML='Inconsistent result ('+chaar[0]+'≠'+dim+'), correct input and <A href="javascript:input_thresh()">tighten threshold'+'</A>.'
           return
       }

// Result seems OK, display it

    var str=''
    flag=false

    for (i=0; i<group.nclass; i++)
        {
            if (nirrep[i] != 0)
               {
                  if (flag) str+=" \u2295 "
                  flag=true
                  var x=group.irrep[i]
                  //if (group.xyzfl[i])  x=x.replace(/(class=")/,"$1ir ")
                  //if (group.quadfl[i]) x=x.replace(/(class=")/,"$1raman ")
                  var y=((group.xyzfl[i])?"ir ":"") + ((group.quadfl[i])?"raman ":"")
                  if (nirrep[i] > 1) {str+='<NOBR class="'+y+'"><SPAN>'+nirrep[i]+"</SPAN>&nbsp;"+x+"</NOBR>"}
                         else        {str+=x.replace(/(class=")/,"$1"+y)}
               }
        }
    //alert (row.innerHTML)
    row.getElementsByClassName("status")[0].innerHTML='<SPAN class=result>'+str+"</SPAN>"
    row.firstChild.innerHTML="<A title='Close this line' onClick='remove_this_line(this)'>[X]</A>"
    row.firstChild.className="close"
    //if (navigator.appVersion.indexOf("MSIE 8")>0) return

//  is it a possible vibrational analysis?

    flag1=!dontpurge
    flag2=false
    flag3=true
    for (i=0;i<group.nclass;i++)
        {
           //alert (flag1+" "+chaar[i]+" "+group.xyz[i]+" "+(((Math.abs(chaar[i])<0.0001)?0:parseInt(chaar[i]/group.xyz[i]+0.01)))+"  "+parseInt(chaar[i]/group.xyz[i]+0.01)+"  "+(chaar[i] == group.xyz[i] * ((Math.abs(chaar[i])<0.0001)?0:parseInt(chaar[i]/group.xyz[i]+0.01))))
           flag1=flag1 && (chaar[i] == group.xyz[i] * ((Math.abs(chaar[i])<0.0001)?0:parseInt(chaar[i]/group.xyz[i]+0.01)))
           flag2=flag2 || (chaar[i] != group.xyz[i] && chaar[i]!=0)
           flag3=flag3 && (nirrep[i] >= group.improper[i])
        }
    //alert(flag1+" "+flag2+" "+flag3)
    if (flag1 && flag2 && flag3 && chaar[0]>6) 
       {
           str="<TD><TD colspan="+group.nclass+1+"><A href='javascript:purge_representation()'>Do you want to remove rotation and translation contributions from this?</A>"
           e=document.createElement("TR")
           e.id="removerottrans"
           if (true||navigator.appVersion.indexOf("MSIE")>0) {set_tr_innerhtml_ie(e, row, str , true)}
            else {e.innerHTML=str; row.parentNode.appendChild(e)}
       }
    //fix_table_colwidth("reducetable","reducetable_td")

//  make next row

    row.className="disabled"
    str='<TD></TD>'
    e=document.createElement("TR")
    for (i=0;i<group.nclass;i++) 
        {
            inp[i].disabled="disabled"
            inp[i].pattern="" // Opera 12 wants this
            if (inp[i].value < 0) inp[i].value="\u2212"+Math.abs(inp[i].value)
            str+="<TD class=forminput><INPUT onChange='do_project(this);' pattern='"+group.charpatt[i]+"' class=sopcl xname=sopcl"+i+" type=text size=6></INPUT></TD>"
        }
    str += "<TD colspan=2 class=status></TD></TR>"
    if (true||navigator.appVersion.indexOf("MSIE")>0) {set_tr_innerhtml_ie(e, row, str , true)}
     else {e.innerHTML=str; row.parentNode.appendChild(e)}
    //row.nextSibling.getElementsByTagName("INPUT")[0].focus();
    document.getElementById("reduceform").getElementsByTagName("TR")[document.getElementById("reduceform").getElementsByTagName("TR").length-1].getElementsByTagName("INPUT")[0].focus()
    
}

function purge_representation()
     {
           el=document.getElementById("removerottrans")
           inpold=el.previousSibling.getElementsByTagName("INPUT")
           inpnew=el.nextSibling.getElementsByTagName("INPUT")
           for (i=0; i<group.nclass; i++)
               {
                  inpnew[i].value=parseFloat(inpold[i].value.replace(/−/,"-")) - group.xyz[i] - group.rot[i]
               }
           el.parentNode.removeChild(el)
           do_project(inpnew[0],true)
     }

function remove_this_line (e)
     {
         e.parentNode.parentNode.parentNode.removeChild(e.parentNode.parentNode)
         if (e=document.getElementById("removerottrans")) e.parentElement.removeChild(e)
     }
function input_thresh() 
     {
          var threshold=group.thresh
          group.thresh=parseFloat(window.prompt ("Threshold for numerical accuracy",group.thresh))
          group.thresh=Math.abs(group.thresh)
          if (group.thresh>1)
             {
                window.alert ("Threshold larger than one is not reasonable.")
                group.thresh=threshold
                return 
             }
           else if (group.thresh>0.1)
             {
                group.thresh=parseFloat(window.prompt ("Threshold values larger than 0.1 are close to unreasonable, are you really really sure?",group.thresh))
             }
           else if (group.thresh>0.01)
             {
                group.thresh=parseFloat(window.prompt ("Threshold values larger than 0.01 are very unsafe, are you sure?",group.thresh))
             }
          var e=document.getElementById("reduceform").getElementsByTagName("INPUT")
          //alert ("restart "+group.thresh)
          do_project(e[e.length-1])
     }

function reduceform_submitter()
     {
          return false
     }


function show_characters()
     {
         el=document.getElementById("reduceform").getElementsByTagName("TABLE")[0]
         if (el.className=="chartabhidden") 
            {
              el.className="chartabshown noanimation"
              el.offsetHeight
              document.getElementById("showhide").firstChild.innerHTML="Hide irreducible representations"
              document.getElementById("showhide").firstChild.href='javascript:hide_characters()'
              el.className="chartabshown"
              document.getElementById("corner").innerHTML=group.grpsym
              return
            }

         var el,i,tr,str,c,c1,c2,sign
         el=document.getElementById("reduceform").getElementsByTagName("TBODY")[0].getElementsByTagName("TR")[0]
         //for (i=group.nclass-1;i>=0;i--)
         for (i=0;i<group.nclass;i++)
             {
                 tr=document.createElement("TR")
                 tr.className="charrow"
                 str="<TD onClick='toggle_reduce_charrow(this)' onMouseOut='unhighlight_reduce_charrow(this)' class=irr>"+group.irrep[i]+"</TD>"
                 for (j=0;j<group.nclass;j++)
                     {
                        c=group.chartab[i][j]
                        c1=parseInt(c)
                        c2=parseFloat(c)
                        if (c2<-0.00001) {sign="<SPAN class=sign>&minus;</SPAN>"} else {sign="<SPAN class='sign signplus'>+</SPAN>"}
                        if (c1 != c2)
                           {
                                c2=parseInt(10000*Math.abs(c2-c1)+0.5).toString()
                                while (c2.length<4) c2='0'+c2
                                str+= "<TD class=charfloat><SPAN class=float>"+sign+"<SPAN class=pre>"+Math.abs(c1)+"</SPAN><SPAN class=decpoint>.</SPAN><SPAN class=post>"+c2+"</SPAN></SPAN></TD>"
                           }
                         else
                           {
                                if (group.cryst) str+= "<TD class='charcryst'><SPAN class='int'>"+sign+"<SPAN class='intnum'>"+Math.abs(c1)+"</SPAN></SPAN></TD>"
                                   //else str+= "<TD><SPAN class=int>"+sign+"<SPAN class=pre>"+Math.abs(c1)+"</SPAN><SPAN class=decpoint>.</SPAN><SPAN class=post>0000</SPAN></SPAN>"
                                   else str+= "<TD class=charint><SPAN class=int>"+sign+"<SPAN class=intnum>"+Math.abs(c1)+"</SPAN></SPAN></TD>"
                           }
                     }
                 str += (group.trans[i])?"<TD class=trans>"+group.trans[i]+"</TD>":"<TD onMouseOver='this.parentNode.className+=\" nohighlight\"' onMouseOut='this.parentNode.className=this.parentNode.className.replace(/ *nohighlight */g,\" \").replace(/  *$/g,\"\")' class=transempty></TD>"
                 str += "<TD onMouseOver='this.parentNode.className+=\" nohighlight\"' onMouseOut='this.parentNode.className=this.parentNode.className.replace(/ *nohighlight */g,\" \").replace(/  *$/g,\"\")' class=extra"+(i==0?" id=reducetable_td>":">")+"</TD>"
                 if (navigator.appVersion.indexOf("MSIE")>0) {set_tr_innerhtml_ie (tr, el, str)}
                  else {tr.innerHTML=str; el.parentNode.insertBefore(tr,el)}
             }
         if (navigator.appVersion.indexOf("MSIE")==-1) 
              {
                document.getElementById("showhide").firstChild.innerHTML="Hide irreducible representations"
                document.getElementById("showhide").firstChild.href='javascript:hide_characters()'
              }
           else 
              {
                document.getElementById("showhide").innerHTML=""
              }
         //if (navigator.appVersion.match(/(Chrome|Safari)/) )  document.getElementById("reduceform").getElementsByClassName("extra")[0].previousSibling.style.maxWidth="20px"
         //    else document.getElementById("reduceform").getElementsByClassName("extra")[0].previousSibling.style.width="20px"
         document.getElementById("reduceform").getElementsByTagName("TABLE")[0].className="chartabshown"
         document.getElementById("corner").innerHTML=group.grpsym
         //fix_table_colwidth("reducetable","reducetable_td")
     }

function set_tr_innerhtml_ie(tr, el, html, flag) 
{
  var tmp = tr.ownerDocument.createElement('div');
  tmp.innerHTML = '<table><tbody><tr>' + html + '</tr></tbody></table>';
  //alert ("Parent="+el.parentNode)
  if (!flag) el.parentNode.insertBefore(tr,el)
    else el.parentNode.appendChild(tr)
  tmp.firstChild.firstChild.firstChild.className=tr.className
  tmp.firstChild.firstChild.firstChild.id=tr.id
  el.parentNode.replaceChild(tmp.firstChild.firstChild.firstChild, tr);
}

function hide_characters()
     {
         el=document.getElementById("reduceform").getElementsByTagName("TABLE")[0].className="chartabhidden"
         document.getElementById("showhide").firstChild.innerHTML="Show irreducible representations"
         document.getElementById("showhide").firstChild.href='javascript:show_characters()'
         document.getElementById("corner").innerHTML=""
     }

function toggle_reduce_charrow (e) { if (e.parentNode.className.match(/hover/)) {e.parentNode.className=e.parentNode.className.replace(/ *hover */g," nohighlight ")} else {e.parentNode.className+=" hoover hover" }}
function unhighlight_reduce_charrow (e) { e.parentNode.className=e.parentNode.className.replace(/ *(nohighlight|hoover) */g," ").replace(/  *$/,"")}



        //var evt, newpage,i
        //if (e) evt=e
        //if (window.event) evt=window.event
        //e=this

function more_multi(e)
   {
        var evt
        if (window.event) evt=window.event
        if (e) evt=e
        var incr= (evt&&(evt.shiftKey||evt.ctrlKey))?11:2
        if(this) this.title="Click for one more entry, or SHIFT+Click for ten more entries"

        tab=document.getElementById("multitab")
        i0=tab.getElementsByTagName("TBODY").length-1
        str=""
        var tb
        for (i=i0+1; i<i0+incr; i++) 
            {
             str = calc_and_red_multi(i) // .replace(/<TD><TD>/,"<TD style='"+((document.getElementById("multipole_name").colSpan==1)?"display:none":"")+"'><TD>")
             tb=document.createElement("TBODY")
             tb.innerHTML=str
             tb.className='l'+i
             tab.appendChild(tb)
             tb.addEventListener("webkitAnimationEnd", animate_multi_gradient, false);
             tb.addEventListener("animationend", animate_multi_gradient, false);
             tb.addEventListener("MSAnimationEnd", animate_multi_gradient, false);
             tb.onmouseleave=fadeout_grad_multi1
             tb.onmouseover=fadein_grad_multi1
            }

      return false
      //str += "</TBODY></TABLE>"
      try
        {
           tab.getElementsByTagName("TBODY")[0].innerHTML += str
        }
      catch (foo) // msie workaround
        {
           var fuck=document.createElement("DIV")
           fuck.innerHTML="<TABLE id='multitab'>"+ tab.innerHTML.replace (/<\/tbody>/i, str+"</TBODY>") + "</TABLE>"
           fuck.id="multitab"
           tab.parentElement.replaceChild(fuck,tab)
        }

      return false
           
   }

function calc_and_red_multi(norder)
   {
      var i,j,k


      var chars=new Array()
      var lname="SPDFGHIJKLMNOQRTUVWXYZ"
      ii=2
      for (i=1;i<norder;i++) {ii *= 2}

      for (j=0;j<group.nclass;j++)
          {
              chars[j]=0
              s=1
              for (k=-norder;k<=norder;k++)
                  {
                      if (group.angle[j]>=0 || (norder-k)/2 == parseInt((norder-k)/2)) chars[j] += Math.cos(group.angle[j]*k)
                      if (group.angle[j]<0 && (norder-k)/2 != parseInt((norder-k)/2)) chars[j] += -Math.cos(group.angle[j]*k)
                  }
          }
      x=decompose(chars)
      if (i<=13) // avoid the _r ambiguity problem
         {
            group.spherical[lname.charAt(i).toLowerCase()]=chars
            if (i>10) finalpattern=finalpattern.replace(/(SPD[A-Z]*)/g,"$1"+lname.charAt(i)).replace(/(spd[a-z]*)/g,"$1"+lname.charAt(i).toLowerCase())
            if (i>10) document.getElementById("mult_inp").pattern=document.getElementById("mult_inp").pattern.replace(/(SPD[A-Z]*)/g,"$1"+lname.charAt(i)).replace(/(spd[a-z]*)/g,"$1"+lname.charAt(i).toLowerCase())
         } // phu, that's nasty

      group.spherical[i]=chars
      return "<TR class=l><TH scope=rowgroup onMouseOut='unhighlight_multi_line(this)' onClick='toggle_multi_line(this)'>"+lname.charAt(i)+"<TD onMouseOut='unhighlight_multi_line(this)' onClick='toggle_multi_line(this)'> (ℓ="+i+")"+"<TD>"+ii+" <TD>"+mname(ii)+"<TD colspan=2>"+x+"<TD>"+ ((x.indexOf(group.irrep[0])>-1) ? "yes":"no") + '<TD>' +  ((group.grpname.match(/[CSD]/))?'<SPAN class=detaillink onClick="show_multi_details(event,this)">▼</SPAN>':'')
   }

function show_multi_details(evt, e)
   {
      var i,j
      tr=e.parentNode.parentNode
      var el
      tb=tr.parentNode
      tb.parentNode.className+=" flexible"
      l= parseInt(tb.className.replace(/[l ]*/,""))
      if (evt && (evt.shiftKey||evt.ctrlKey) || window.event && (window.event.shiftKey||window.event.ctrlKey))
         {
            el=tb.parentNode.getElementsByClassName("detaillink")
            var q,qq=0
            q=e.innerHTML
            for (i=0;i<el.length;i++) 
              {
                  //console.log ("Lopping "+i+" "+el[i].parentNode.parentNode.parentNode.className+" "+(el[i]!=e && q==el[i].innerHTML))
                  if (el[i]!=e && q==el[i].innerHTML) {show_multi_details_do(el[i],true)}
              }
         }
       show_multi_details_do(e)
       tb.mouseState="inside"
       //fadein_grad_multi(tb)
       tb.parentNode.className=tb.parentNode.className.replace (/flexible */g,"").replace(/ *$/,"")
       //alert(tb.parentNode+" "+tb.parentNode.className)
    }
function show_multi_details_do(e, flag)
   {
      var el,tr,tb,l,i,j,wmax1a,wmax2a
      tr=e.parentNode.parentNode
      tb=tr.parentNode
      l= parseInt(tb.className.replace(/[l ]*/,""))
//console.log ("show_multi_details_do: make "+l)
      if (tr.className.match(/done/))
         {
            //console.log("Toggle existing "+e.parentNode.parentNode.className)
            //console.log ("saved values "+show_multi_details_do.wmax1+" "+show_multi_details_do.wmax2)
            wmax1a=0
            wmax2a=0
            var enable=(e.innerHTML=="▼")
            for (m=0;m<=l;m++)
                 {
                   tr=tr.nextSibling
                   if (enable)
                      {
                         //tr.style.display="table-row"
                         e.parentNode.parentNode.onmouseout=function() {this.className=this.className.replace (/ hover/g,""); this.onmouseout=""}
                         if (tr.getElementsByClassName("containirred").length==1 && !flag)
                            {
                               //alert(tr.getElementsByClassName("containirred")[0])
                               //alert(tr.getElementsByClassName("m2")[0])
                               //alert(tr.getElementsByClassName("m2")[1])
                               wmax1a = Math.max(wmax1a,parseInt('0'+getComputedStyle(tr.getElementsByClassName("m2")[0],"").getPropertyValue("width"),10))
                               wmax1a = Math.max(wmax2a,parseInt('0'+getComputedStyle(tr.getElementsByClassName("m2")[1],"").getPropertyValue("width"),10))
                               wmax2a = Math.max(wmax2a,parseInt('0'+getComputedStyle(tr.getElementsByClassName("containirred")[0],"").getPropertyValue("width"),10))
                            }
                         //console.log ("m="+m+" enabled; saved values "+show_multi_details_do.wmax1+" "+show_multi_details_do.wmax2+"   actual="+wmax1a+" "+wmax2a)
                      }
                    else
                      {
                         //tr.style.display="none"
                      }
                 }
            e.innerHTML=(enable?"▲":"▼")
            if (enable) {tr.className+=" hover"; tr.parentNode.className+=' showdetails'}
               else {tr.parentNode.className=tr.parentNode.className.replace(/ *showdetails */," ").replace(/ *$/,"")}
            //console.log ("Must polish? wmax1a,wmax2a="+wmax1a+" "+wmax2a+" "+(show_multi_details_do.wmax1>=wmax1a)+(show_multi_details_do.wmax2>=wmax2a))
            if ((wmax1a==0)&&(wmax2a==0) || show_multi_details_do.wmax1>=wmax1a && show_multi_details_do.wmax2>=wmax2a) return // no polishing
         }
       else
         {
             //alert ("Not done: "+tr.className)
             for (m=0;m<=l;m++)
                 {
                    el=document.createElement("TR")
                    el.className="detail"
                    var str
                    str="<TD><TD><TD><TD><TD colspan=4 class=m>"
                    mm=make_multi_detail (l,m)
                    if (mm.match(/⊕/)) str+= "<SPAN class=container><SPAN class=m><SPAN><I>m</I>=±"+m+"</SPAN></SPAN> <SPAN class=m2><SPAN>&psi;<SUB>+"+m+"</SUB>+&psi;<SUB>−"+m+"</SUB></SPAN></SPAN> <SPAN class=containirred>"+mm.match(/<[^⊕]*>/g)[0].replace(/<SPAN class=mcomp.*/,"")+"</SPAN> <SPAN class=m2><SPAN>&psi;<SUB>+"+m+"</SUB>−&psi;<SUB>−"+m+"</SUB></SPAN></SPAN> <SPAN class=containirred2>"+mm.match(/<[^⊕]*>/g)[1].replace(/<SPAN class=mcomp.*/,"")+"</SPAN></SPAN>"
                      else str += "<SPAN class=container><SPAN class=m><SPAN><I>m</I>=" + (m!=0?"±":"")+m+"</SPAN></SPAN> "   + mm +"</SPAN>"
                    el.innerHTML=str
                    tb.insertBefore(el, tr.nextSibling)
                 }
	     tr.className+=" done hover"
             tr.parentNode.className+=" showdetails"
             e.innerHTML="▲"
             e.parentNode.parentNode.onmouseout=function() {this.className=this.className.replace (/ hover/g,""); this.onmouseout=""}
         }
      if (flag) return
      //console.log ("Doing polish "+tr.parentNode.className)
      var wmax=0
      el=tr.parentNode.getElementsByClassName("m2")
      //console.log ("Polishing m2 +"+el.length)
      for (i=0;i<el.length;i++) {el[i].style.width=""; wmax=Math.max(wmax,parseInt('0'+getComputedStyle(el[i],"").getPropertyValue("width"),10))}
      //console.log ("Polishing m2, wmax= +"+wmax)
      show_multi_details_do.wmax1=wmax
      for (i=0;i<el.length;i++) {el[i].style.width=wmax+"px"}
      wmax=0
      el=tr.parentNode.getElementsByClassName("containirred")
      //console.log ("Polishing containirred +"+el.length)
      for (i=0;i<el.length;i++) {el[i].style.width=""; wmax=Math.max(wmax,parseInt('0'+getComputedStyle(el[i],"").getPropertyValue("width"),10))}
      //console.log ("Polishing containirred, wmax= +"+wmax)
      show_multi_details_do.wmax2=wmax
      for (i=0;i<el.length;i++) {el[i].style.width=wmax+"px"}
      //console.log ("Removing flexible")
      tr.parentNode.className=tr.parentNode.className.replace (/flexible */g,"").replace(/ *$/,"")
   }

show_multi_details_do.wmax1=0
show_multi_details_do.wmax2=0

function make_multi_detail (l,m)
   {
      var c = new Array(),str,i,j,k
      for (i=0;i<group.nclass;i++)
          {
              if (group.sop[i].match(/σ<sub>[vd]<\/sub>/i) ) c[i]= (m==0?1:0)
                else if (group.sop[i].match(/[′″]/i) ) c[i]= (m==0?(is_even(l)?1:-1):0)
                else c[i]= (m==0?1:2) * Math.cos(m*group.angle[i]) * (group.angle[i]<0 && is_even(l-m+1)?-1:1)
              //if (m==0) alert (group.sop[i]+"  "+c[i] + " "+group.sop[i].match(/[′″]|σ<sub>[vd]<\/sub>/))
          }
      str=decompose(c)
      if (str.match(/⊕/))
         {
            if (group.grpname.match(/C[0-9]+v/)) str=str.replace (/⊕/, ' <SPAN class=mcomp>(+'+m+')</SPAN> ⊕') + " <SPAN class=mcomp>(−"+m+")</SPAN>"
            if (group.grpname.match(/D2h?$/)) 
               {
                  if (is_even(l)) str=str.replace (/⊕/, ' <SPAN class=mcomp>(+)</SPAN> ⊕') + " <SPAN class=mcomp>(−)</SPAN>"
                   else str=str.replace (/⊕/, ' <SPAN class=mcomp>(−)</SPAN> ⊕') + " <SPAN class=mcomp>(+)</SPAN>"
               }
             else if (group.grpname.match(/D[0-9]+[hd]?$/)) 
               {
                  if (is_even(l-m)) str=str.replace (/⊕/, ' <SPAN class=mcomp>(+)</SPAN> ⊕') + " <SPAN class=mcomp>(−)</SPAN>"
                   else str=str.replace (/⊕/, ' <SPAN class=mcomp>(−)</SPAN> ⊕') + " <SPAN class=mcomp>(+)</SPAN>"
               }
            if (str.match (/\(−.*⊕.*\(+/)) str=str.replace(/(.*) ⊕ (.*)/,"$2 ⊕ $1")
         }
      
      return str
   }

var grddbg=false

function unhighlight_multi_line(e) 
   {
        if (grddbg) console.log ("unhighlight_multi_line: current class is "+e.parentNode.parentNode.className)
        if (e.parentNode.parentNode.className.match(/unhover/)) e.parentNode.parentNode.crypticFlag=true
        e.parentNode.parentNode.className = e.parentNode.parentNode.className.replace(/ *unhover */g," ").replace(/ *hooover */g," ").replace(/  *$/,""); 
        //fadein_grad_multi (e.parentNode.parentNode); 
   }

function toggle_multi_line(e)    
   {
        var cn=e.parentNode.parentNode.className; 
        var cnn=cn.replace(/ hoo*ver/g," ").replace(/unhover/,"hooover").replace(/(un)*hoo?ver/g,"").replace(/  *$/,""); 
        cnn+= (cn.match(/hoover/))?" unhover":" hoover";  
        e.parentNode.parentNode.className = cnn; 
        if (cnn.match(/unhover/)) {fadeout_grad_multi(e.parentNode.parentNode)} else {fadein_grad_multi (e.parentNode.parentNode)}
  }

function fadein_grad_multi1(){fadein_grad_multi(this)}
function fadein_grad_multi(e)
   {
      var dur=0.1
      if (grddbg) console.log ("fadein_grad_multi: TBODY."+e.className.replace(/ /g,".")+" mouseState="+e.mouseState)
      if (e.className.match(/hoover/) && !e.className.match(/hooover/)) return
      if (!e.className.match(/showdetails/)) return
      if (e.mouseState=="inside") return
      e.mouseState="inside"
      e.style.animationName=""
      e.style.animationDuration=""
      var i,imax=5,s1="",s2="",imin=0
      if (e.className.match(/grad[0-9]/)) 
          {
             imax=parseInt(e.className.replace(/.*grad([0-9]).*/,"$1"))
             e.className=e.className.replace (/ grad[0-9]/,""); 
             e.offsetHeight; 
             if (grddbg) console.log ("imax="+imax+"  classname="+e.className)
          }
      for (i=imax; i>=imin;i--) 
          {
             s1+=("gradani"+(imax-i)+", ")
             s2+=((i*dur)+"s, ")
          }
   
      if (grddbg) console.log ("fadein_grad_multi: start animation "+s1+"   "+s2)
      e.style.animationName=s1.replace(/, *$/,"")
      e.style.animationDuration=s2.replace(/, *$/,"")
      e.style.animationTimingFunction="linear"
   }

function fadeout_grad_multi1(){fadeout_grad_multi(this)}
function fadeout_grad_multi(e)
   {
      var dur=0.1
      if (grddbg) console.log ("fadeout_grad_multi: TBODY."+e.className.replace(/ /g,".")+"  mouseState="+e.mouseState+"   crypticFlag="+e.crypticFlag)
      if (e.className.match(/hoover/)) return
      if (!e.className.match(/showdetails/)) return
      if (e.crypticFlag) {e.crypticFlag=false;return}
      e.style.animationName=""
      e.style.animationDuration=""
      var i,imax=5,s1="",s2="",imin=0
      if (e.className.match(/grad[0-9]/)) 
          {
             imin=parseInt(e.className.replace(/.*grad([0-9]).*/,"$1"))
             e.className=e.className.replace (/ grad[0-9]/,""); 
             e.offsetHeight; 
             if (grddbg) console.log ("imin="+imin+"  classname="+e.className)
          }

      for (i=imax; i>=imin;i--) 
          {
             s1+=("gradani"+(i)+", ")
             s2+=(((i-imin)*dur)+"s, ")
          }
   
      if (grddbg) console.log ("fadeout_grad_multi: start animation "+s1+"   "+s2)
      e.style.animationName=s1.replace(/, *$/,"")
      e.style.animationDuration=s2.replace(/, *$/,"")
      e.style.animationTimingFunction="linear"
      e.mouseState="outside"
   }

function animate_multi_gradient(evt)
   {
      myself=this.className.replace(/ .*/,"")
      ani=evt.animationName
      if (grddbg) console.log ("Event handler called on "+myself+" due to end of "+ani+" after "+evt.elapsedTime+"s.")
      this.crypticFlag=false
      if (!ani.match(/gradani/)) return

      if (this.style.animationName.indexOf(ani)==0)
         {
            if (grddbg) console.log ("Endpoint reached at "+ani+", cleaning up")
            this.style.animationName=""
            this.style.animationDuration=""
            this.className=this.className.replace(/ grad[0-9]/g,"")
         }
       else
        {
            this.className=(this.className.replace(/ grad[0-9]/g,"")+" "+ani.replace(/ani/,""))
        }
   }

function make_multipoles()
   {

      str="<H2 class=stickleft id=h_multi>Symmetry of Spherical Harmonics (multipoles)</H2><TABLE id=multitab><THEAD><TR><TH scope=col colspan=2>Angular<BR>momentum<TH scope=col id=multipole_name style='text-align:center' onClick='toggle_multipole_names(this)' colspan=2>Multipole order<TH scope=col colspan=2>Symmetry<TH scope=col colspan=2>permanent<BR>moment?</THEAD><TFOOT><TR><TD colspan=6><FORM> <A href='#' onclick='more_multi(this);return false' id='make_multi_a'>More…</A></FORM></TFOOT><TBODY class=l0><TR class=space><TD><TD><TD><TD><TD><TD>"

      str+='<TR class=l><TH scope=rowgroup onMouseOut="unhighlight_multi_line(this)" onClick="toggle_multi_line(this)">S<TD  onMouseOut="unhighlight_multi_line(this)" onClick="toggle_multi_line(this)">(ℓ=0)<TD>1<TD>(monopole)<TD colspan=2>'+group.irrep[0]+'<TD><TD></TBODY>'
      for (i=1; i<11; i++)
         {
             str += '<TBODY onMouseLeave="fadeout_grad_multi(this)" onMouseOver="fadein_grad_multi(this)" class=l'+i+'>'+calc_and_red_multi(i)+"</TBODY>"
         }

      str += "</TABLE>"
      el=document.getElementById("noteslist")
      try {str+='<FORM class=stickleft onSubmit="return false" style="padding-left:3em"><P class=labelp>Set font size in table to <INPUT type=number style="width:4em" step="any" pattern="[0-9]*\.[0-9]" id="set_font_size_multitab" class=setfontsize onChange="set_font_size(this)" value="'+parseInt(window.getComputedStyle(el, "").getPropertyValue("font-size"))+'" defval="'+parseInt(window.getComputedStyle(el, "").getPropertyValue("font-size"))+'"> px</FORM>'} catch (foo) {}

      rottrans=document.getElementById ("notesdiv")
      e=document.createElement("DIV")
      e.id="multipolediv"
      if (group.orig[0].charAt(group.orig[0].length-1) != "'") e.className="noprime"
      e.innerHTML=str

      var el1

      for (i=0;i<10;i++)
          {
               if ((el1=e.getElementsByTagName("TBODY")[i+1].getElementsByTagName("TD")[5]) && el1.innerHTML == "yes")
                  {
                      el1.className="yes"
                      break
                  }
          }
      rottrans.parentNode.insertBefore(e,rottrans)
      e=document.createElement("HR")
      rottrans.parentNode.insertBefore(e,rottrans)
      if (navigator.appVersion.indexOf("MSIE 8")<0) document.getElementById("make_multi_a").onclick=more_multi
      //if (navigator.appVersion.indexOf("MSIE 8")>-1) document.getElementById("make_multi_a").href=""


      e=document.getElementById("multitab").getElementsByTagName("TBODY")
      for (i=0; i<e.length;i++)
         {
            e[i].addEventListener("webkitAnimationEnd", animate_multi_gradient, false);
            e[i].addEventListener("animationend", animate_multi_gradient, false);
            e[i].addEventListener("oanimationend", animate_multi_gradient, false);
            e[i].addEventListener("MSAnimationEnd", animate_multi_gradient, false);
         }
   }


function toggle_multipole_names(e)
  {
      e.colSpan=3-parseInt(e.colSpan)
      e.innerHTML=(e.colSpan==1)?"Multipole<BR>order":"Multipole order"
      e.style.textAlign=(e.colSpan==1)?"right":"center"
      e.parentNode.parentNode.parentNode.className=(e.colSpan==1)?"nomultinames":""
      return
  }

function mname (ii)
   {
       if (ii==1) return "(monopole)"
       if (ii==2) return "(dipole)"
       if (ii==4) return "(quadru­pole)"
       if (ii==8) return "(octu­pole)"
       if (ii==16) return "(hexa­deca­pole)"
       if (ii==32) return "(do­triaconta­pole)"
       if (ii==64) return "(tetra­hexa­conta­pole)"
       if (ii==128) return "(octa­cosa­hecta­pole)"
       return ""
   }

function make_notes()
   {
      var isom, molex
      str=document.getElementsByTagName("PRE")[0].innerHTML // .substr(str.indexOf("Notes"),str.length)
      var x=parseInt(group.grpname.match(/[0-9]+/))
      text= (str.substr(str.indexOf("Notes"),str.length)).replace(/(\r\n|\n|\r)/gm, "@")
      str = str.substr(0,str.indexOf("Notes"))
      document.getElementsByTagName("PRE")[0].innerHTML=str


      hr=document.getElementsByTagName ("HR")[0]
      e=document.createElement("HR")
      hr.parentNode.insertBefore(e,hr)
      e=document.createElement("DIV")
      e.id="notesdiv"
      strnew="<H2 class=stickleft id=h_notes>Notes</H2><OL id=noteslist><TABLE id=factsheet></TABLE>"
      line=split_line(text,1)
      for (i=2;line!="@";i++)
          {
             line=line.replace(/[αβγδεζηθικλμ]/g, "<LI class=plaina><P>").replace(/\,</g, ', <').replace (/ chosing /, ' choosing ').replace(/(Therefore, it is a cyclic group)./,"$1 and iso&shy;morphic to <B>Z</B><SUB>"+group.grporder+"</SUB>, the group of integer addition modulo "+group.grporder+".").replace (/96-gon is/, "96-gon (<SPAN class=mhyp>enneaconta&shy;kai&shy;hexagon</SPAN>) is").replace (/e\.g\./,"<NOBR class=eg>e.&thinsp;g.</NOBR>")
             if (group.grpname.charAt(0)=="S" && group.grporder>2 && is_odd(group.grporder/2) && line.match(/Therefore, it is a cyclic group/)) line+="<P>However, by convention, the character table is built from redundant generators: C<SUB>"+group.grporder/2+"</SUB> and i."
             if (line.match(/(C<SUB class="*minisop"*>[^<>]*<\/SUB><SUP class="*minisop"*>[^<>]*<\/SUP>)/i)) line=line.replace(/(C<SUB class="*minisop"*>[^<>]*<\/SUB><SUP class="*minisop"*>[^<>]*<\/SUP>)/gi,"<NOBR>$1</NOBR>")
             if (line.match("Because the group is Abelian and the maximum")) line=line.replace(/<LI/, "<LI id=complex1")
             if (line.match("Vierergruppe")) line=line.replace(/Vierergruppe/, "<SPAN class=mhyp>Vierer&shy;gruppe</SPAN>")
             if (line.match(/(non)?equivalent/)) line=line.replace(/(non)?equivalent/, "<SPAN class=mhyp>$1equi&shy;valent</SPAN>").replace(/nonequi/,"non&shy;equi")
             if (line.match(/are two different sets /)) line+=" <SPAN>A &pi;/"+x+" (C<SUB>"+(2*x)+"</SUB>"+(is_integer(720/x)?", "+(180/x)+"°)":")")+" rotation transforms one set into the other.</SPAN><P>"
             if (line.match(/By convention, the set.*contains both.*(plane)/) && is_integer(x/8)) line+=" <SPAN> It also contains the (<I>x</I>+<I>y</I>)<I>z</I> median plane.</SPAN><P>"
             if (line.match(/By convention, the set.*contains both.*(axes)/) && is_integer(x/8)) line+=" <SPAN> It also contains the <I>x</I>+<I>y</I> median axis.</SPAN><P>"
             if (line.match(/By convention, the set.*contains both.*(plane)/) && !is_integer(x/8)) line+=" <SPAN> On the other hand, the (<I>x</I>+<I>y</I>)<I>z</I> median plane belongs to the &sigma;<SUB>d</SUB> set.</SPAN><P>"
             if (line.match(/By convention, the set.*contains both.*(axes)/) && !is_integer(x/8)) line+=" <SPAN> On the other hand, the <I>x</I>+<I>y</I> median axis belongs to the C<SUB class=minisop>2</SUB><SUP class=minisop>&Prime;</SUP> set.</SPAN><P>"
             if (line.match(/minimum angle/)) line=line.replace(/choosing a minimum angle is safe/, "choosing the minimum angle of &pi;/"+(parseInt(group.grpname.match(/[0-9]+/))*(group.grpname.match(/D[0-9]+d/)?2:1))+" is safe")
             if (line.match("hendecagon")) line=line.replace(/hendecagon/, "<SPAN class=mhyp>hen&shy;deca&shy;gon</SPAN>")
             if (line.match("symmetry")) line=line.replace(/symmetry/, "<SPAN class=mhyp>sym&shy;metry</SPAN>")
             if (line.match("Eukleides")) line=line.replace(/Eukleides already discovered/, "Eukleídēs of Alexándreia already gave")
             if (line.match("triskaidecagon")) line=line.replace(/triskaidecagon/, "<SPAN class=mhyp>tris&shy;kai&shy;deca&shy;gon</SPAN>")
             if (line.match("The order of the")) line=line.replace(/The order of the/, "<NOBR>The order of the</NOBR>")
             if (line.match(" lowest nonvanishing multipole moment in S<sub>2</sub>")) line=line.replace(/S<sub>2/, "C<SUB>i")
             if (line.match(/ lowest nonvanishing multipole moment.*dipole moment\)/) && group.grpname!="C1") line=line.replace(/The lowest nonvanishing multipole moment.*dipole moment\)/,"This is a polar point group, because several points stay fixed under all symmetry operations. Therefore, the lowest nonvanishing multipole moment is 2 (dipole moment), and also all higher moments are nonzero")
             if (line.match("lowest nonvanishing multipole moment")) line=line.replace(/([a-z]+)(pole)/g, "<SPAN class=mhyp>$1&shy;$2</SPAN>").replace(/tetrahexaconta/,"tetra&shy;hexaconta")
             if (line.match("almost behaves* like a* *true irreducible representation")) line=line.replace(/<LI/, "<LI id=complex2")
             if (line.match("point group contains [a-z]* complex-valued")) line=line.replace(/<LI/, "<LI id=complex1")
             if (line.match("purely conventional") && group.grpname=="D2h") {line=line.replace(/(B<SUB>[123])/gi, "$1<I>x</I>")}
             if (line.match("purely conventional")) {line=line.replace(/>,B/gi, ">,&nbsp;B")}
             if (group.grpname.match(/Th*$/) && line.match(/complex-valued one-dimensional irreducible representation/)) line=line.replace(/representations that have/,"representations, because its maximum trigonal sub&shy;symmetry ("+(group.grpname=="T"?"<A href=C3.html>C<SUB>3</SUB></A>":"<A href=S6.html>S<SUB>6</SUB></A>")+") is Abelian. In the Character Table, they have")
             if (line.match("purely conventional")) line=line.replace(/purely conventional/, "a special convention used only for "+(group.grpname=="D2"?"D<SUB>2</SUB>":"<A href=D2.html>D<SUB>2</SUB></A>")+" and "+(group.grpname=="D2h"?"D<SUB>2h</SUB>":"<A href=D2h.html>D<SUB>2h</SUB></A>"))
             if (line.match("using the familiar projection formula")) line=line.replace(/(projection formula)/, "<A id=projectref href='#h_project'>$1</A>")
             if (line.match("representation")) line=line.replace(/representation(s?)/g, "<SPAN class=mhyp>re&shy;presen&shy;tation$1</SPAN>")
             if (line.match(" median plane") && group.grpname.match(/D[0-9]*[02468]d/) && is_integer (parseInt(group.grpname.match(/[0-9][0-9]*/))/4) ) line=line.replace(/; but it contains the median plane.*/,".")
             if (line.match(/ denoted σ<SUB>d<\/SUB> /i) && group.grpname.match(/D[0-9]*[13579]h/) ) line=line.replace(/denoted σ<SUB>d<\/SUB> /i,"denoted σ<SUB>v</SUB> ")
             if (line.match(" Golden Ratio ")) line=line.replace(/1.61803\./,"1.61803398874989484820458683436563811772…")
             if (line.match(" lowest nonvanishing multipole moment in C<sub>1h</sub>")) line=line.replace(/C<sub>1h/, "C<SUB>s")
             if (group.grpname.match(/C[0-9]*h/)) line=line.replace(/The canonical choice, however, is to use redundant generators: (.*)\./,"This character table, however, uses two redundant generators $1, as is canonical for C<SUB>(2<I>n</I>+1)h</SUB>.")
             if (line.match(/These [0-9]+ cases have been combined into [0-9]+ two-dimensional representations that are no longer irreducible but have real-valued characters./))
                  line=line.replace(line.match(/[0-9]+/g)[0], number(line.match(/[0-9]+/g)[0])).replace(line.match(/[0-9]+/g)[1], number(line.match(/[0-9]+/g)[1]))
             if (line.match(/Accordingly, [0-9]+ pairs of left and right/)) line=line.replace(line.match(/[0-9]+/g)[0], number(line.match(/[0-9]+/g)[0]))
             if (line.match(/The [0-9]+ reducible /)) line=line.replace(line.match(/ [0-9]+ /g)[0], ' '+number(line.match(/ [0-9]+ /g)[0].replace(/ /g,""))+' ')
             if (line.match(/2π\/9/)) {line=line.replace (/(2\*cos\(2π\/9.*)/, "<NOBR>$1</NOBR>")}
             if (line.match(/\.\.\./)) {line=line.replace (/\.\.\./g, "…")}
             line=line.replace(/(Symmetric Group Sym\((.)\))/, "$1, the group of all permutations of order $2").replace(/(Alternating Group Alt\((.)\))\./, "$1, the group of all even permutations of order $2.").replace (/(It is the smallest non-Abelian simple)/,"</SPAN><BR><SPAN>$1")
             if (group.grpname=="T" && line.match(/iso&shy;morphic to the Alternating Group Alt\(4\)/)) line+="<BR>"
             if (/[….] *$/.test(line) && ! /characters are integers because|almost behave like true irreducible/.test(line)) line+="<P>"
             if (line.match(/point group is isomorphic to/)&& line.match(/<A href=.*<\/A>/i)) {isom=line.match(/<A href=.*<\/A>/i).toString().replace(/,/g,"").replace(/ and /," ")}
             if (line.match(/This point group corresponds to cubic sym&shy;metry./)) line=line.replace(/\<P\>$/," It has two classes of rotation axes with "+(group.grpname.match(/T/)?"two":"three")+"-fold and "+(group.grpname.match(/T/)?"three":"four")+"-fold sym&shy;metry; these axes inter&shy;sect at an angle of <NOBR>arccos(1/√<SPAN style='text-decoration:overline'>3</SPAN>)=54.736°</NOBR> (half the famous “tetra&shy;hedron angle”).<LI>")
             if (line.match("isomorphic")) line=line.replace(/isomorphic/, "<SPAN class=mhyp>iso&shy;morphic</SPAN>")
             if (line.match(/This point group corresponds to icosahedral sym&shy;metry./)) line=line.replace(/\<P\>$/," It has three classes of rotation axes with two-, three and five-fold sym&shy;metry. The C<SUB>2</SUB> axes intersect with the C<SUB>3</SUB> axes at an angle of <NOBR>arccos(1/√<SPAN style='text-decoration:overline'>3</SPAN>)=54.736°</NOBR>, and with the C<SUB>5</SUB> axes at angles of 90° and <NOBR>arccos(√<SPAN style='border-top:1px black solid; padding-top:1px'>(5±√<SPAN style='text-decoration:overline'>5</SPAN>)/10</SPAN>)</NOBR>, <I>viz</I>, 31.717° and 58.283°.<LI>")
             strnew += " "+line
             line=split_line(text,i)
          }

      strnew += "</OL>"
      e.innerHTML=strnew
      hr.parentNode.insertBefore(e,hr)

      if ( !e.getElementsByTagName("LI")[0].innerHTML.match(/The group has *[0-9]* [a-z]*irredu/)) e.getElementsByTagName("LI")[0].innerHTML =  e.getElementsByTagName("LI")[0].innerHTML.replace(/<p>/, " The group has "+group.nclass+" irreducible representations.<P>")
      if ( e.getElementsByTagName("LI")[0].innerHTML.match(/The group has *[0-9]* [a-z]*irredu/)) e.getElementsByTagName("LI")[0].innerHTML =  e.getElementsByTagName("LI")[0].innerHTML.replace(/The group has.*$/, " The group has "+number(group.nclass)+" irreducible representation"+(group.nclass>1?"s":"")+".<P>")
      if ((group.irrepfact.howmany(2)!=0)) e.getElementsByTagName("LI")[0].innerHTML =  e.getElementsByTagName("LI")[0].innerHTML.replace(/ irreducible representations/, " <SPAN class=mhyp>(pseudo)&shy;irre&shy;ducible repre&shy;sen&shy;ta&shy;tions</SPAN>")


       el=document.getElementById("noteslist").getElementsByTagName("LI")[1]
       if (el.innerHTML.match (/known|referred|named/)) el=el.nextSibling
       ol=document.createElement("LI")

       if (group.cryst)
          {
             str = "<P>The crystallographic notation (Hermann–Mauguin system) of the "+group.grpname.replace(/S2/,"Ci").replace(/C1h/,"Cs").replace(/^(.)(.*)$/,"$1<SUB>$2</SUB>")+" point group is "
             if (group.grpname=="Cs"||group.grpname=="C1v"||group.grpname=="C1h") str += "m."
              else if (group.grpname=="Ci"||group.grpname=="S2") str += "1&#x0305;."
              else if (group.grpname.match (/C[2346]$/)) str += group.grpname.replace (/C(.)/,"$1.")
              else if (group.grpname=="C2v"||group.grpname=="D1h") str += "2mm."
              else if (group.grpname=="C3v") str += "3m."
              else if (group.grpname.match (/C[246]v$/)) str += group.grpname.replace (/C(.)v/,"$1mm.")
              else if (group.grpname=="C3h") str += "6&#x0305;."
              else if (group.grpname.match (/C[246]h$/)) str += group.grpname.replace (/C(.)h/,"$1/m.")
              else if (group.grpname=="D1") str += "2."
              else if (group.grpname=="D3") str += "32."
              else if (group.grpname.match (/D[246]$/)) str += group.grpname.replace (/D(.)/,"$122.")
              else if (group.grpname=="D2h") str += "mmm."
              else if (group.grpname=="D3h") str += "6&#x0305;m2."
              else if (group.grpname.match (/D[46]h$/)) str += group.grpname.replace (/D(.)h/,"$1/mmm.")
              else if (group.grpname=="D1d") str += "2/m."
              else if (group.grpname=="D2d") str += "4&#x0305;2m."
              else if (group.grpname=="D3d") str += "3&#x0305;m."
              else if (group.grpname=="D4d") str += "3&#x0305;m."
              else if (group.grpname=="S4") str += "4&#x0305;."
              else if (group.grpname=="S6") str += "3&#x0305;."
              else if (group.grpname=="T") str += "23."
              else if (group.grpname=="Th") str += "m3&#x0305;."
              else if (group.grpname=="Td") str += "4&#x0305;3m."
              else if (group.grpname=="O") str += "432."
              else if (group.grpname=="Oh") str += "m3&#x0305;m."
              else if (group.grpname=="C1") str += "1."
             str+="</P>"
             ol.innerHTML=str
             el.parentNode.appendChild(ol)
             ol=document.createElement("LI")
          }

       str=""
       var x=0

       if (group.grpname.match (/^[CD]5[hv]?$/) || group.grpname=="I" ) x=5
       if (group.grpname.match (/^[SCD]7[hv]?$/) ) x=7
       if (group.grpname.match (/^[SCD]9[hv]?$/) ) x=9
       if (group.grpname.match (/^[SCD]8[hv]?$/) || group.grpname=="D4d" ) x=8
       if (group.grpname.match (/^[SCD]10[hv]?$/) || group.grpname=="Ih" || group.grpname=="D5d" ) x=10
       if (group.grpname.match (/^[SCD]12[hv]?$/) || group.grpname=="D6d") x=12
       if (group.grpname.match (/^[SCD]14[hv]?$/) || group.grpname=="D7d") x=14
       if (group.grpname.match (/^[SCD]15[hv]?$/) ) x=15
       if (group.grpname.match (/^[SCD]18[hv]?$/) || group.grpname=="D9d") x=18
       if (group.grpname.match (/^[SCD]20[hv]?$/) || group.grpname=="D10d") x=20
       if (group.grpname.match (/^[SCD]24[hv]?$/) || group.grpname=="D12d") x=24
       if (group.grpname.match (/^[SCD]30[hv]?$/) || group.grpname=="D15d") x=30

       if (x)
          {
              ol.id="quasicryst"
              str="<P>This is not a crystallographic group due its  "+number(x)+"-fold sym&shy;metry axis, which is incompatible with three-dimensional periodic lattice sym&shy;metry because <NOBR>2 cos(2π/"+x+")</NOBR> is not an integer."
              if (group.grpname.charAt(0)=="I") str+="<P> However, 3D <SPAN class=mhyp>quasi&shy;crystals</SPAN> with icosahedral sym&shy;metry can be constructed from a slice cut out of a five-dimensional cubic lattice, because a five-dimensional hypercube has icosahedral projections in 3D space."
              else if (x==5||x==8||x==10||x==12) str+="<P> However, 3D <SPAN class=mhyp>quasi&shy;crystals</SPAN> containing "+group.grpname.replace(/([CSDI])(.*)/,"$1<SUB>$2</SUB>").replace(/<SUB><.SUB>/,"")+" can be constructed from a slice cut out of a four-<WBR>dimensional lattice. This is possible because <NOBR>2 cos(2π/"+x+")</NOBR> is an arithmetic integer of degree two, and "+(group.grpname.match(/D[0-9]+d|S[0-9]*[02468]$/)?"S":"C")+"<SUB>"+x+"</SUB> elements are thus allowed in periodic 4D lattices."
               else str+="<P> However, periodic lattices with "+(group.grpname.match(/D[0-9]+d|S[0-9]*[02468]$/)?"an S":(group.grpname.match(/C[0-9]*[13579]h/)?"a C<SUB>"+x+"</SUB> or S":"a C"))+"<SUB>"+x+"</SUB> element are possible in six dimensions, and thus 3D <SPAN class=mhyp>quasi&shy;crystals</SPAN> containing "+group.grpname.replace(/([CSDI])(.*)/,"$1<SUB>$2</SUB>").replace(/<SUB><.SUB>/,"")+" could be constructed from a 3D slice cut out of a 6D lattice. This is hypo&shy;thetical, though, because all known quasi&shy;crystals derive from 4D or 5D lattices."
              ol.innerHTML=str
              el.parentNode.appendChild(ol)
              ol=document.createElement("LI")
          }

       if (parseInt(group.grpname.substring(1))>2) 
          {
             if (group.grpname.match(/^C[0-9]+$/)) str="<P>Geometrical objects with C<SUB><I>n</I></SUB> sym&shy;metry include regular pyramids twisted about their central axis, or pyramidal propellers. C<SUB><I>n</I></SUB> objects can be constructed from a regular polygon by adding an unsym&shy;metric ap&shy;pend&shy;age to each vertex."
             if (group.grpname.match(/^C[0-9]+v$/)) str="<P>Geometrical objects with C<SUB><I>n</I>v</SUB> sym&shy;metry include the regular pyramids (also the truncated pyramids). C<SUB><I>n</I>v</SUB> objects can be constructed from a regular polygon by adding an out-of-plane-bent but otherwise sym&shy;metric ap&shy;pend&shy;age to each vertex, or a sym&shy;metric <SPAN class=mhyp>ortho&shy;gonal</SPAN> ap&shy;pend&shy;age to the center."
             if (group.grpname.match(/^C[0-9]+h$/)) str="<P>Geometrical objects with C<SUB><I>n</I>h</SUB> sym&shy;metry can be constructed from a regular polygon by adding an in-plane bent but other&shy;wise sym&shy;metric ap&shy;pend&shy;age to each vertex. They can be visualized as achiral propellers (with a mirror plane)."
             if (group.grpname.match(/^D[0-9]+$/)) str="<P>Geometrical objects with D<SUB><I>n</I></SUB> sym&shy;metry (“chiral dihedral sym&shy;metry”) include planar wheels with straight, radially twisted blades (wind wheels, propellers) and axially twisted regular prisms. D<SUB><I>n</I></SUB> objects can be constructed from a regular polygon by adding a straight (or other&shy;wise sym&shy;metric), but tangentially tilted ap&shy;pend&shy;age to each vertex. "
             if (group.grpname.match(/^D[0-9]+h$/)) str="<P>Geometrical objects with D<SUB><I>n</I>h</SUB> sym&shy;metry (“full dihedral sym&shy;metry”) include regular polygons and the corresponding prisms and their duals, the bi&shy;pyramids (also if truncated on both sides)."
             if (group.grpname.match(/^D[0-9]+d$/)) str="<P>Geometrical objects with D<SUB><I>n</I>d</SUB> sym&shy;metry include regular <SPAN class=mhyp>anti&shy;prims</SPAN> and their duals, the deltohedrons. D<SUB><I>n</I>d</SUB> objects can be constructed from a regular polygon <I>of double order</I> by adding an out-of-plane bent but otherwithe sym&shy;metric ap&shy;pend&shy;age to each vertex in <I>alternating</I> (up–down–up–…) fashion."
             if (group.grpname.match(/^S[0-9]+$/)) str="<P>Geometrical objects with S<SUB>2<I>n</I></SUB> sym&shy;metry can be constructed from a regular polygon by adding an unsym&shy;metric, out-of-plane bent ap&shy;pend&shy;age to each vertex in <I>alternating</I> (up–down–up–…) fashion. This is also referred to as “double propeller structure”, as it can be achieved by combining two propellers (D<SUB><I>n</I></SUB>, C<SUB><I>n</I>h</SUB> or C<SUB><I>n</I></SUB>) along a common main axis, with opposite orientation and in staggered arrangement."
          }
          else if (group.grpname.match(/^C2v$/)) {str="<P>Geometrical objects with C<SUB>2v</SUB> sym&shy;metry include the isosceles triangle, the isosceles trapezoid, the deltoid (kite) and the rectangular pyramid. Any object possessing two <SPAN class=mhyp>ortho&shy;gonal</SPAN> mirror planes must have at least  C<SUB>2v</SUB> sym&shy;metry."}
          else if (group.grpname.match(/^C2h$/)) {str="<P>The C<SUB>2h</SUB> sym&shy;metry is exemplified by a parallelogram or the shape of the letter S."}
          else if (group.grpname.match(/^D2d$/)) {str="<P>The D<SUB>2d</SUB> sym&shy;metry is exemplified by a <SPAN class=mhyp>tetra&shy;gonal</SPAN> <NOBR>disphenoid</NOBR> (a regular tetrahedron elongated along one of its C<SUB>2</SUB> axes), which can also be considered as a two-sided <SPAN class=mhyp>anti&shy;prim</SPAN>, by a triangualr dodecahedron (snub disphenoid), or by a tennis ball."}
          else if (group.grpname.match(/^C2$/)) {str="<P>The C<SUB>2</SUB> sym&shy;metry is exemplified by a helix or any helix fragment (the C<SUB>2</SUB> axis is perpendicular to both the helix axis and the helix backbone)."}
          else if (group.grpname.match(/^D2$/)) {str="<P>The D<SUB>2</SUB> sym&shy;metry is exemplified by a double helix or any double helix fragment. Any object possessing two <SPAN class=mhyp>ortho&shy;gonal</SPAN> two&shy;fold sym&shy;metry axes (a third one arises auto&shy;matically) must have at least D<SUB>2</SUB> symmetry."}
          else if (group.grpname.match(/^D2h$/)) {str="<P>D<SUB>2h</SUB> is the sym&shy;metry of a rectangle (which can be considered as a two-sided prism), a rhombus or a rectangular prism. Any object possessing three <SPAN class=mhyp>ortho&shy;gonal</SPAN> mirror planes must have at least  D<SUB>2h</SUB> symmetry."}
          else if (group.grpname == 'O') {str="<P>Among the Archimedean solids, O (“chiral octa&shy;hedral sym&shy;metry”) is exemplified by the snub cube."}
          else if (group.grpname == 'Oh') {str="<P>The regular octahedron and its dual, the cube, feature O<SUB>h</SUB> (“full octa&shy;hedral sym&shy;metry”). Among the Archimedean solids, O<SUB>h</SUB> sym&shy;metry is exemplified by the truncated cube, the truncated <SPAN class=mhyp>octa&shy;hedron</SPAN>, the <SPAN class=mhyp>rhombi&shy;cubocta&shy;hedron</SPAN>, the <SPAN class=mhyp>cubocta&shy;hedron</SPAN> and the truncated <SPAN class=mhyp>cubocta&shy;hedron</SPAN>."}
          else if (group.grpname == 'Td') {str="<P>The regular tetrahedron features T<SUB>d</SUB> (“full tetra&shy;hedral”) symmetry. Among the Archi&shy;medean solids, T<SUB>d</SUB> sym&shy;metry is represented by the truncated <NOBR>tetrahedron</NOBR>."}
          else if (group.grpname == 'Th') {str="<P>There is no Archimedean solid with  T<SUB>h</SUB> (“pyrito&shy;hedral sym&shy;metry”). The most regular solids with this sym&shy;metry are the <SPAN class=mhyp>pyrito&shy;hedron</SPAN>, which is a <SPAN class=mhyp>dodeca&shy;hedron</SPAN> with twelve identical but irregular (C<SUB>2v</SUB>) <SPAN class=mhyp>penta&shy;gons</SPAN>, and its dual, the <SPAN class=mhyp>pseudo&shy;icosa&shy;hedron</SPAN>, which is an <SPAN class=mhyp>icosa&shy;hedron</SPAN> with eight <SPAN class=mhyp>equi&shy;lateral</SPAN> and twelve <SPAN class=mhyp>iso&shy;sceles</SPAN> tri&shy;angles (the regular dodecahedron and the regular icosahedron are special cases of these). An very easy shape exemplifying T<SUB>h</SUB> is a cube with alternating horizontal and vertical marks on its faces. "}
          else if (group.grpname == 'I') {str="<P>Among the Archimedean solids, I (“chiral icosahedral sym&shy;metry”) is exempli&shy;fied by the snub <NOBR>dodecahedron</NOBR>."}
          else if (group.grpname == 'Ih') {str="<P>The regular dodecahedron and its dual, the regular icosa&shy;hedron, feature I<SUB>h</SUB> (“full icosa&shy;hedral sym&shy;metry”). Among the Archimedean solids, I<SUB>h</SUB> sym&shy;metry is exemplified by the truncated <SPAN class=mhyp>dodeca&shy;hedron</SPAN>, the truncated <SPAN class=mhyp>icosa&shy;hedron</SPAN>, the <SPAN class=mhyp>rhomb&shy;icosidodeca&shy;hedron, the <SPAN class=mhyp>icosido&shy;deca&shy;hedron</SPAN> and the truncated <NOBR>icosidodecahedron</NOBR>."}

       if (str)
          {
              ol.id="geometry"
              ol.innerHTML=str
              el.parentNode.appendChild(ol)
              ol=document.createElement("LI")
          }

       str=''
       if (group.grpname == "Oh") str="<P>O<SUB>h</SUB> has twenty-three non-trivial subgroups, among them all other cubic groups (<A href=T.html>T</A>, <A href=Th.html>T<SUB>h</SUB></A>, <A href=Td.html>T<SUB>d</SUB></A>, <A href=O.html>O</A>). Furthermore, it contains a tetragonal subsystem (<A href=D4h.html>D<SUB>4h</SUB></A> and its subgroups <A href=D4.html>D<SUB>4</SUB></A>, <A href=C4h.html>C<SUB>4h</SUB></A>, <A href=C4v.html>C<SUB>4v</SUB></A>, <A href=C4.html>C<SUB>4</SUB></A>, <A href=D2d.html>D<SUB>2d</SUB></A>, <A href=S4.html>S<SUB>4</SUB></A>, <A href=D2h.html>D<SUB>2h</SUB></A>, <A href=D2.html>D<SUB>2</SUB></A>, <A href=C2h.html>C<SUB>2h</SUB></A>, <A href=C2v.html>C<SUB>2v</SUB></A>, <A href=C2.html>C<SUB>2</SUB></A> and <A href=C1h.html>C<SUB>s</SUB></A>) and a trigonal subsystem (<A href=D3d.html>D<SUB>3d</SUB></A> and its subgroups <A href=S6.html>S<SUB>6</SUB></A>, <A href=D3.html>D<SUB>3</SUB></A>, <A href=C3v.html>C<SUB>3v</SUB></A>, <A href=C3.html>C<SUB>3</SUB></A>, <A href=C2h.html>C<SUB>2h</SUB></A>, <A href=C2.html>C<SUB>2</SUB></A> and <A href=C1v.html>C<SUB>s</SUB></A>). Finally, <A href=S2.html>C<SUB>i</SUB></A> is common to both systems. Several subgroups appear in more than one orientation; if these are counted separately, the total number of subgroups rises to thirty-one.  "
        else if (group.grpname == "Td") str="<P>T<SUB>d</SUB> has nine non-trivial subgroups: <A href=T.html>T</A>, <A href=D2d.html>D<SUB>2d</SUB></A> (thus, also <A href=S4.html>S<SUB>4</SUB></A>, <A href=D2.html>D<SUB>2</SUB></A>, <A href=C2v.html>C<SUB>2v</SUB></A> and <A href=C2.html>C<SUB>2</SUB></A>) and <A href=C3v.html>C<SUB>3v</SUB></A> (thus, also <A href=C3.html>C<SUB>3</SUB></A> and <A href=C1h.html>C<SUB>s</SUB></A>).  T<SUB>d</SUB> is a subgroup of <A href=Oh.html>O<SUB>h</SUB></A>, but of no other sym&shy;metry point group."
        else if (group.grpname == "Th") str="<P>T<SUB>h</SUB> has ten non-trivial subgroups: <A href=T.html>T</A>, <A href=D2h.html>D<SUB>2h</SUB></A> (thus, also <A href=D2.html>D<SUB>2</SUB></A>, <A href=C2.html>C<SUB>2</SUB></A>, <A href=C2h.html>C<SUB>2h</SUB></A>, <A href=C2v.html>C<SUB>2v</SUB></A> and <A href=C1h.html>C<SUB>s</SUB></A>) and <A href=S6.html>S<SUB>6</SUB></A> (thus, also <A href=C3.html>C<SUB>3</SUB></A> and <A href=S2.html>C<SUB>i</SUB></A>). T<SUB>h</SUB> is the largest common subgroup of <A href=Oh.html>O<SUB>h</SUB></A> and <A href=Ih.html>I<SUB>h</SUB></A>; it is therefore possible to morph an octahedron (or cube) into a regular icosahedron with all intermediary structures having T<SUB>h</SUB>."
        else if (group.grpname == "T") str="<P>T (“chiral tetrahedral sym&shy;metry”) has three non-trivial subgroups: <A href=C3.html>C<SUB>3</SUB></A>, <A href=D2.html>D<SUB>2</SUB></A> and <A href=C2.html>C<SUB>2</SUB></A>. It is itself a subgroup of all other cubic (<A href=Td.html>T<SUB>d</SUB></A>, <A href=Th.html>T<SUB>h</SUB></A>, <A href=O.html>O</A>, <A href=Oh.html>O<SUB>h</SUB></A>) and icosahedral (<A href=I.html>I</A>, <A href=Ih.html>I<SUB>h</SUB></A>) groups. T is also the largest common subgroup of any icosahedral group and either <A href=O.html>O</A> or <A href=Td.html>T<SUB>d</SUB></A>, or of <A href=I.html>I</A> and either <A href=Th.html>T<SUB>h</SUB></A> or <A href=Oh.html>O<SUB>h</SUB></A>, or of <A href=O.html>O</A> and either <A href=Td.html>T<SUB>d</SUB></A> or <A href=Th.html>T<SUB>h</SUB></A>."
        else if (group.grpname == "O") str="<P>O has seven non-trivial subgroups: <A href=T.html>T</A>, <A href=D4.html>D<SUB>4</SUB></A> (thus, also <A href=C4.html>C<SUB>4</SUB></A>, <A href=D2.html>D<SUB>2</SUB></A> and <A href=C2.html>C<SUB>2</SUB></A>) and <A href=D3.html>D<SUB>3</SUB></A> (thus, also <A href=C3.html>C<SUB>3</SUB></A> and <A href=C2.html>C<SUB>2</SUB></A>). The <A href=D2.html>D<SUB>2</SUB></A> and <A href=C2.html>C<SUB>2</SUB></A> subgroups appear in two different orientations each. Apart from <A href=Oh.html>O<SUB>h</SUB></A>, there is  no sym&shy;metry point group than contains O."
        else if (group.grpname == "I") str="<P>I has seven non-trivial subgroups: The cubic <A href=T.html>T</A>, the pentagonal <A href=D5.html>D<SUB>5</SUB></A> (thus also <A href=C5.html>C<SUB>5</SUB></A>), the trigonal <A href=D3.html>D<SUB>3</SUB></A> (thus, also <A href=C3.html>C<SUB>3</SUB></A>) and the orthorhombic <A href=D2.html>D<SUB>2</SUB></A>; a <A href=C2.html>C<SUB>2</SUB></A> sym&shy;metry is shared between pentagonal, trigonal and orthorhombic in the same orientation. The only point group containing I is <A href=Ih.html>I<SUB>h</SUB></A>."
        else if (group.grpname == "Ih") str="<P>I<SUB>h</SUB> has twenty non-trivial subgroups, among them <A href=I.html>I</A>, <A href=Th.html>T<SUB>h</SUB></A> and <A href=T.html>T</A>. Furthermore, it has a pentagonal subsystem consisting of <A href=D5d.html>D<SUB>5d</SUB></A> and its subgroups (<A href=S10.html>S<SUB>10</SUB></A>,  <A href=D5.html>D<SUB>5</SUB></A>,  <A href=C5v.html>C<SUB>5v</SUB></A> and  <A href=C5.html>C<SUB>5</SUB></A>), a trigonal subsystem  (<A href=D3d.html>D<SUB>3d</SUB></A> and its subgroups <A href=S6.html>S<SUB>6</SUB></A>, <A href=D3.html>D<SUB>3</SUB></A>, <A href=C3v.html>C<SUB>3v</SUB></A>, <A href=C3.html>C<SUB>3</SUB></A>) and an orthorhombic subsystem (<A href=D2h.html>D<SUB>2h</SUB></A> and  <A href=D2.html>D<SUB>2</SUB></A>). Some more sym&shy;metries are shared between the latter three: <A href=C2h.html>C<SUB>2h</SUB></A>, <A href=C2v.html>C<SUB>2v</SUB></A>, <A href=C2.html>C<SUB>2</SUB></A>, <A href=C1h.html>C<SUB>s</SUB></A> and <A href=S2.html>C<SUB>i</SUB></A>. Each subgroup appears only in one orientation (up to sym&shy;metry transformations).  "
       else str="<P>"

       
       if (str)
          {
              ol.id="subgroup"
              ol.className="plaina"
              ol.innerHTML=str
              el.parentNode.appendChild(ol)
              if (str=="<P>") ol.style.display="none"
              ol=document.createElement("LI")
          }

       str=''

       ol.id=""
       if (group.grpname=="Ih") str="<P>In three dimensions, there can be no geometric sym&shy;metry (point or space group) that contains I<SUB>h</SUB> as a subgroup. No other point group has this property (although <A href=Oh.html>O<SUB>h</SUB></A> cannot be subgroup of other point groups, too)."
       if (group.grpname=="Oh") str="<P>In three dimensions, there can be no point group that contains O<SUB>h</SUB> as a subgroup. Other than <A href=Ih.html>I<SUB>h</SUB></A>, which shares this property, O<SUB>h</SUB> is crystallographic and can therefore appear as a subgroup in space groups."


       if (str)
          {
              ol.className="plaina"
              ol.innerHTML=str
              el.parentNode.appendChild(ol)
              ol=document.createElement("LI")
          }

       ol.id="examples"
       //if (window.location.href.match (/http:/)) return
       var dbg=false
       var dbg=(dbg && window.location.href.match(/file:\/\//))
       if (dbg) ol.className+=" showmhyp"

       if (dbg || group.grpname=="C1") ol.innerHTML += "<P class=plaina>Most molecules have C<SUB>1</SUB> symmetry, which amounts to no symmetry at all. A C<SUB>1</SUB> molecule must have at least four atoms; some of the simplest examples are <SPAN class=mhyp>chloro&shy;fluoro&shy;amine</SPAN> NHFCl, HOOF (gauche) and <SPAN class=mhyp>bromo&shy;chloro&shy;fluoro&shy;methane</SPAN> CHBrClF. Among organic compounds systems, some of the simplest examples are <SPAN class=mhyp>2-butanol</SPAN>, <SPAN class=mhyp>2-chloro&shy;oxirane</SPAN>, <SPAN class=mhyp>3-methyl&shy;cyclobutene</SPAN> and <SPAN class=mhyp>bicyclo[2.2.0]&shy;hexane-2-ol</SPAN>. Organic compounds with <NOBR>asymmetric</NOBR> C atoms will have C<SUB>1</SUB> symmetry unless there is some kind of <SPAN class=mhyp>equi&shy;valency</SPAN> among chiral centers. The vast majority of small <SPAN class=mhyp>bio&shy;molecules</SPAN> (all amino acids except glycine, most vitamins, almost all <SPAN class=mhyp>carbo&shy;hydrates</SPAN>) have only C<SUB>1</SUB> symmetry. Examples of unsymmetric molecules that, nevertheless, show chemically fully or almost <SPAN class=mhyp>equi&shy;valent</SPAN> atoms are <SPAN class=mhyp>1-chloro&shy;ethanol</SPAN>, <SPAN class=mhyp>2-chloro&shy;butane</SPAN>, <SPAN class=mhyp>3-methyl&shy;hexane</SPAN>, 3-methyl-1-pentene, <SPAN class=mhyp>1-chloro&shy;biphenyl</SPAN>, <SPAN class=mhyp>(1-methylpropyl)&shy;benzene</SPAN>, <SPAN class=mhyp><SPAN class=mhyp>phenyl&shy;naphthalene</SPAN></SPAN>, <SPAN class=mhyp>glycer&shy;aldehyde</SPAN>, 1-ethyl-2-methyl-adamantane."
       if (dbg || group.grpname=="C1h") ol.innerHTML += "<P class=plaina>Molecules with C<SUB>s</SUB> symmetry are extremly common. Some examples include <SPAN class=mhyp>hypo&shy;chloric</SPAN> acid HOCl, cyanic acid HOCN, <SPAN class=mhyp>fluoro&shy;amine</SPAN> NH<SUB>2</SUB>F, thionyl chloride SOCl<SUB>2</SUB>, <SPAN class=mhyp>chloro&shy;fluoro&shy;methane</SPAN> CH<SUB>2</SUB>FCl, propene, <SPAN class=mhyp>chloro&shy;cyclo&shy;propane</SPAN>, <NOBR>phenol</NOBR>, <SPAN class=mhyp>ethl&shy;benzene</SPAN>, <SPAN class=mhyp>1-chloro-<WBR>2-iodo&shy;benzene</SPAN>,   <SPAN class=mhyp>2-methyloxane</SPAN> (<SPAN class=mhyp>2-methyl&shy;tetrahydro&shy;furane</SPAN>) and <SPAN class=mhyp>bicyclo[2.2.0]&shy;hexane-2-ol</SPAN>  and <SPAN class=mhyp>cyclo&shy;pentane</SPAN> in its envelope conformation."
       if (dbg || group.grpname=="S2") ol.innerHTML += "<P class=plaina>Molecules with C<SUB>i</SUB> symmetry are not so common, as most <SPAN class=mhyp>centro&shy;symmet&shy;ric</SPAN> molecules will rather show <A class=plaina href=C2h.html>C<SUB>2h</SUB></A>; an example is <SPAN class=mhyp>2,5-diamino-<WBR>1,4-benzo&shy;quinone</SPAN>, where <SPAN class=mhyp>intra&shy;molecular</SPAN> H-bridges force the amino groups into two possible conformations (one has C<SUB>i</SUB>, the other <A href=C2.html>C<SUB>2</SUB></A>). <P>Yet most examples of C<SUB>i</SUB> are provided by molecules with two <SPAN class=mhyp>equi&shy;valent</SPAN> chiral centers if the two have opposite configuration (<I>meso</I>-form):  Tartaric acid, <SPAN class=mhyp>2,3-dichloro&shy;succinic acid</SPAN>, <SPAN class=mhyp>1,2-dibromo-<WBR>1,2-dichloro&shy;ethane</SPAN> (staggered conformation) and <SPAN class=mhyp>2,5-bis&shy;(chloro&shy;hydroxy&shy;methyl)-1,4-<WBR>dihydroxy&shy;benzene</SPAN>. Another example is <SPAN class=mhyp>1,4-dibromo-<WBR>2,5-dichloro&shy;cyclohexane</SPAN> (all substituents in  the axial position) with four pairwise <SPAN class=mhyp>equi&shy;valent</SPAN> asymmetric C atoms.  A similar situation is found in some optically inactive carbohydrate derivatives, <I>viz.</I>, the sugar alcohols and aldaric acids derived from allose (<NOBR>allitol</NOBR> and <NOBR>allaric acid</NOBR>), galactose (galactitol<WBR>=dulcitol and <SPAN class=mhyp>galact&shy;aric</SPAN> acid) and erythrose (<NOBR>erythritol</NOBR> and “<NOBR>erythraric</NOBR> acid” which is identical to <I>meso</I>-tartaric acid)."
       if (dbg || group.grpname=="C2") ol.innerHTML += "<P class=plaina>Molecules with C<SUB>2</SUB> symmetry are extremly common. Some examples include hydrogen peroxide, hydrazine, <SPAN class=mhyp>cyclo&shy;hexene</SPAN> (twisted), <SPAN class=mhyp>1,1’-bi&shy;naphthyl</SPAN> and <SPAN class=mhyp>2,2’-bi&shy;pyridyl</SPAN> (bulky substitution improves conformational stability), <SPAN class=mhyp>helicenes</SPAN>, <SPAN class=mhyp>2,3-penta&shy;diene</SPAN> (<SPAN class=mhyp>di&shy;methyl&shy;allene</SPAN>), <I>trans</I>-<WBR><SPAN class=mhyp>bicyclo[3.3.0]&shy;octane</SPAN>, <I>cis</I>-decalin (<SPAN class=mhyp>bicyclo&shy;[4.4.0]&shy;decane</SPAN>) and finally the five-rings <SPAN class=mhyp>cyclo&shy;pentane</SPAN> and <SPAN class=mhyp>tetrahydro&shy;furane</SPAN> in their twisted conformation. Moreover, this symmetry is found in many optically active compounds with pairs of <SPAN class=mhyp>equi&shy;valent</SPAN> asymmetric atoms like tartaric acid, mannitol, iditol, mannaric acid (also its <SPAN class=mhyp>di&shy;lactone</SPAN>) and the <I>trans</I> isomers of <SPAN class=mhyp>1,2-dichloro&shy;cyclo&shy;propane</SPAN>."
       if (dbg || group.grpname=="C2h") ol.innerHTML += "<P class=plaina>Molecules with C<SUB>2h</SUB> symmetry are very common. Some examples include butane, hexane, <SPAN class=mhyp><I>trans</I>-<WBR>1,2-dichloro&shy;ethene</SPAN>, <SPAN class=mhyp>ethane&shy;diol</SPAN>, <I>trans</I>-2-butene, <SPAN class=mhyp>1,3-buta&shy;diene</SPAN>, oxalic acid, 2,2’-bipyridine, <SPAN class=mhyp>buta&shy;dione</SPAN>, <SPAN class=mhyp>1,4-dibromo-<WBR>2,5-dichloro&shy;benzene</SPAN>, <I>trans</I>-decalin (<SPAN class=mhyp>bicyclo&shy;[4.4.0]&shy;decane</SPAN>), zethrene, <SPAN class=mhyp><SPAN class=mhyp>1,5-diaza&shy;naphthaline</SPAN></SPAN> (<SPAN class=mhyp>1,5-naphthyridine</SPAN>), <NOBR>(&eta;<SUP>5</SUP>–C<SUB>5</SUB>H<SUB>5</SUB>)<SUB>2</SUB>Fe<SUB>2</SUB>(CO)<SUB>4</SUB></NOBR>, and <SPAN class=mhyp>1,4-dichloro&shy;cyclohexane</SPAN> in either both equatorial or both axial conformation."
       if (dbg || group.grpname=="C2v") ol.innerHTML += "<P class=plaina>Molecules with C<SUB>2v</SUB> symmetry are extremely common. Some examples include H<SUB>2</SUB>O, ozone, SF<SUB>4</SUB>, sulfuryl chloride SO<SUB>2</SUB>Cl<SUB>2</SUB>, <NOBR>disilyne</NOBR> Si<SUB>2</SUB>H<SUB>2</SUB>, <SPAN class=mhyp>dichloro&shy;methane</SPAN>, propane, pentane, <SPAN class=mhyp>cyclo&shy;propene</SPAN>, <SPAN class=mhyp>cyclo&shy;butene</SPAN>, dioxane (boat), pyridine, 1,3-diazine (pyrimidine), 1,2- or <SPAN class=mhyp>1,3-dichloro&shy;benzene</SPAN>, <SPAN class=mhyp>phen&shy;anthrene</SPAN>, acridine, azulene, <SPAN class=mhyp>phthalic</SPAN> anhydride, <I>cis</I>-<WBR><SPAN class=mhyp>bicyclo[3.3.0]&shy;octane-<WBR>3,7-dione</SPAN>, cuneane, and <SPAN class=mhyp>cyclo&shy;hexane</SPAN> in its boat conformation. In coordination chemistry, C<SUB>2v</SUB> is found in mixed <SPAN class=mhyp>octa&shy;hedrally</SPAN> coordinated complexes like <I>cis</I>-[CoCl<SUB>2</SUB>(H<SUB>2</SUB>O)<SUB>4</SUB>]."
       if (dbg || group.grpname=="D2") ol.innerHTML += "<P class=plaina>Molecules with D<SUB>2</SUB> symmetry are common. Some examples include <SPAN class=mhyp>bi&shy;phenyl</SPAN> (bulky substituted or better bridged to fix the conformation), <SPAN class=mhyp>bicyclo&shy;[4.4.0]&shy;dec-1,6-ene</SPAN>, twistane <SPAN class=mhyp>(tricyclo[4.4.0.0<SUP>3,8</SUP>]&shy;decane)</SPAN>, <SPAN class=mhyp>tetra&shy;nitro&shy;ethene</SPAN>, <SPAN class=mhyp>para&shy;cyclophanes</SPAN> (low temperature form of basic <SPAN class=mhyp>[2.2]para&shy;cyclo&shy;phane</SPAN>, appropriately <SPAN class=mhyp>tetra&shy;substituted</SPAN> <SPAN class=mhyp>[2.2]para&shy;cyclo&shy;phanes</SPAN>, higher <SPAN class=mhyp>homo&shy;logs</SPAN>, many <SPAN class=mhyp>multi&shy;layered</SPAN> <SPAN class=mhyp>para&shy;cyclophanes)</SPAN> and one <SPAN class=mhyp>stereo&shy;iso&shy;mer</SPAN> of each <SPAN class=mhyp>3,4,7,8-tetra&shy;chloro&shy;spiro[4.4]&shy;nona&shy;tetraene</SPAN>, <SPAN class=mhyp>spiro&shy;pyridinium</SPAN> or the three-ring substitued allene (CHMe)<SUB>2</SUB>&gt;C=C=C&lt;(CHMe)<SUB>2</SUB> (<SPAN class=mhyp>1,2,1’,2’-tetra&shy;methyl bis&shy;ethane-allene</SPAN>). A particularly elegant example of D<SUB>2</SUB> symmetry is found in 6,6-vespirene. The hypo&shy;thetical allene <SPAN class=mhyp>bicyclo&shy;[6.6.1]&shy;pentadeca-<WBR>1<SUP>(15)</SUP>,8<SUP>(15)</SUP>-diene</SPAN> is also worth mentioning."
       if (dbg || group.grpname=="D2h") ol.innerHTML += "<P class=plaina>Molecules with D<SUB>2h</SUB> symmetry are common. Some examples include ethene, <SPAN class=mhyp>di&shy;borane</SPAN>, <SPAN class=mhyp>1,4-dichloro&shy;benzene</SPAN>, 1,4-diazine (pyrazine), <SPAN class=mhyp>1,3-dibromo-<WBR>4,6-dichloro&shy;benzene</SPAN>,  <SPAN class=mhyp>naphthalene</SPAN>, pyrene, fulvalene, <SPAN class=mhyp>tricyclo&shy;[3.1.1.1<SUP>(2,4)</SUP>]&shy;octane</SPAN> C<SUB>8</SUB>H<SUB>12</SUB>, pagodane and a number of “organic carbon oxides”, <NOBR class=eg>e.&thinsp;g.</NOBR>, <SPAN class=mhyp>ethylene&shy;tetracarboxylic acid di&shy;anhydride</SPAN> C<SUB>6</SUB>O<SUB>6</SUB> and <SPAN class=mhyp>tetra&shy;hydroxy-1,4-<WBR>benzo&shy;quinone bis&shy;carbonate</SPAN> C<SUB>8</SUB>O<SUB>8</SUB>. In coordination chemistry, D<SUB>2h</SUB> is encountered in the <I>trans</I> isomers of quadratically-planar complexes like [PdCl<SUB>2</SUB>(H<SUB>2</SUB>O)<SUB>2</SUB>]. "
       if (dbg || group.grpname=="D2d") ol.innerHTML += "<P class=plaina>Molecules with D<SUB>2d</SUB> symmetry are moderately common. Some examples include B<SUB>2</SUB>Cl<SUB>4</SUB>, B<SUB>8</SUB>Cl<SUB>8</SUB>,  S<SUB>4</SUB>N<SUB>4</SUB>, <SPAN class=mhyp>cyclo&shy;tetra&shy;silane</SPAN> <NOBR>Si<SUB>4</SUB>H<SUB>8</SUB></NOBR>, allene (<SPAN class=mhyp>propa&shy;diene</SPAN>) H<SUB>2</SUB>C=C=CH<SUB>2</SUB>, <SPAN class=mhyp>cyclo&shy;octa&shy;tetraene</SPAN> <NOBR>C<SUB>8</SUB>H<SUB>8</SUB></NOBR>, <SPAN class=mhyp>tetra&shy;ethyl lead</SPAN> <NOBR>Pb(C<SUB>2</SUB>H<SUB>5</SUB>)<SUB>4</SUB></NOBR> (the terminal C atoms take the <SPAN class=mhyp>anti&shy;peri&shy;planar</SPAN> position with respect to the central Pb), <SPAN class=mhyp>tetra&shy;chloro&shy;neopentane</SPAN> (solid state, preceding comment applies), <SPAN class=mhyp>spiro[4.4]&shy;nona&shy;tetraene</SPAN> (or <SPAN class=mhyp>spiro&shy;pyrrolidium)</SPAN> and the B<SUB>40</SUB> “<SPAN class=mhyp>boro&shy;spherene</SPAN>” cage."
       if (dbg || group.grpname=="C3") ol.innerHTML += "<P class=plaina>Molecules with C<SUB>3</SUB> symmetry are not rare. Some examples include <SPAN class=mhyp>triphenyl&shy;phosphane</SPAN>, <SPAN class=mhyp>triphenyl&shy;methane</SPAN>, <SPAN class=mhyp>trinitro&shy;methane</SPAN>, <SPAN class=mhyp>tribenzyl&shy;methane</SPAN>, tris(<I>tert</I>-butyl)-methane, <SPAN class=mhyp>1-aza-bicyclo[3.3.3]&shy;undecan</SPAN>, <SPAN class=mhyp>3,7,11-trimethyl&shy;cyclododeca<WBR>-1,5,9-<WBR>triene</SPAN> (all <I>trans</I>). Complexes of <SPAN class=mhyp>trans&shy;ition</SPAN> metal with three unsymmetrical bi&shy;chelate ligands like <SPAN class=mhyp>1,2-diamino&shy;propane</SPAN> or substituted 2,2’-bipyridines also show thet symmetry if the two different ligand atom types coordinate in <I>fac</I> fashion; in contrast, the neutral chromium(III) picolinate has been found a <I>mer</I> complex of C<SUB>1</SUB> symmetry. Another example of a mostly inorganic “propeller molecule” is the borate ester of <SPAN class=mhyp>tris&shy;(2-hydroxy&shy;propyl)&shy;amine</SPAN> (<SPAN class=mhyp>“tri&shy;isopropanolamino&shy;borate”</SPAN>)."
       if (dbg || group.grpname=="C3v") ol.innerHTML += "<P class=plaina>Molecules with C<SUB>3v</SUB> symmetry are common. Some examples include NH<SUB>3</SUB>, POCl<SUB>3</SUB>, XeF<SUB>6</SUB> (very floppy), HCo(CO)<SUB>4</SUB>, <SPAN class=mhyp>trichloro&shy;methane</SPAN>, <SPAN class=mhyp>aceto&shy;nitrile</SPAN>, <SPAN class=mhyp>1,3,5-trichloro&shy;cyclohexane</SPAN> (all equatorial or all axial conformation), <SPAN class=mhyp>1,3,5-trioxane</SPAN>, <SPAN class=mhyp>1-aza&shy;adamantane</SPAN>, <SPAN class=mhyp>1-aza&shy;bicyclo&shy;[2.2.2]&shy;octane</SPAN>, <SPAN class=mhyp>1,3,5-trichloro-<WBR>2,4,6-triethyl&shy;benzene</SPAN>, <SPAN class=mhyp>1,3,5-tri&shy;azido-2,4,6-trinitro&shy;benzene</SPAN> (both bowl-shaped), <SPAN class=mhyp>methyl&shy;cubane</SPAN>, <SPAN class=mhyp>tri&shy;quinacene</SPAN> (<SPAN class=mhyp>tricyclo&shy;[5.2.1.-0<SUP>4,10</SUP>]&shy;deca-2,5,8-<WBR>triene</SPAN>), <SPAN class=mhyp>perhydro&shy;phenalene</SPAN> (<SPAN class=mhyp>tricyclo&shy;[7.3.2.0<SUP>5,13</SUP>]&shy;tridecane), CF<SUB>3</SUB>–CH<SUB>3</SUB>, sumanene, <SPAN class=mhyp>hexa&shy;methyl</SPAN> tungsten."
       if (dbg || group.grpname=="C3h") ol.innerHTML += "<P class=plaina>Molecules with C<SUB>3h</SUB> symmetry quite rare. Some examples include boric acid, <SPAN class=mhyp>bicyclo[3.3.3]&shy;undecan</SPAN>, <SPAN class=mhyp>tri&shy;cyclo[3.3.3.0<SUP>(1,5)</SUP>]&shy;undecan</SPAN> and a variety of <SPAN class=mhyp>tri&shy;substituted</SPAN> benzene derivatives: <SPAN class=mhyp>1,3,5-trihydroxy&shy;benzene</SPAN>, <SPAN class=mhyp>1,3,5-tris(<I>N</I>,<I>N</I>-dimethyl&shy;amino)&shy;benzene</SPAN>, <SPAN class=mhyp>1,3,5-tris&shy;(<I>tert</I>-butyl)&shy;benzene</SPAN>, <SPAN class=mhyp>2,4,6-trihydroxy&shy;benzene-1,3,5-tri&shy;carb&shy;oxylic</SPAN> acid (and its an&shy;hydride or rather tri&shy;lactone), <SPAN class=mhyp>benzo&shy;trifuroxane</SPAN>, <SPAN class=mhyp>cyan&shy;uric triazide</SPAN> (<SPAN class=mhyp>2,4,6-tri&shy;azido-1,3,5-triazine</SPAN>) and <SPAN class=mhyp>1,5,9-trichloro&shy;triphenylene</SPAN>."
       if (dbg || group.grpname=="D3") ol.innerHTML += "<P class=plaina>Molecules with D<SUB>3</SUB> symmetry are common. Some examples include <SPAN class=mhyp>triphenyl&shy;methyl</SPAN> radical, <SPAN class=mhyp>1,3,5-triphenyl&shy;benzene</SPAN>, <SPAN class=mhyp>perhydro&shy;triphenylene</SPAN>, <SPAN class=mhyp>1,4,7-trithia&shy;cyclo&shy;nonane</SPAN>, <SPAN class=mhyp>1,5,9-cyclododeca&shy;triene</SPAN> (all <I>trans</I>), <SPAN class=mhyp>[4.4.4]&shy;propellane</SPAN>  and bi&shy;chelate  1:3 complexes of many <SPAN class=mhyp>trans&shy;ition</SPAN> metals with symmetric ligands like <SPAN class=mhyp>diamino&shy;ethane</SPAN>, <NOBR>oxalic</NOBR> acid, <SPAN class=mhyp>phen&shy;anthroline</SPAN> or bipyridyl."
       if (dbg || group.grpname=="D3h") ol.innerHTML += "<P class=plaina>Molecules with D<SUB>3h</SUB> symmetry are common. Some examples include BF<SUB>3</SUB>, SbF<SUB>5</SUB>, carbonate, <SPAN class=mhyp>cyclo&shy;propenium</SPAN> <NOBR>C<SUB>3</SUB>H<SUB class=align>3</SUB><SUP>+</SUP></NOBR>, <SPAN class=mhyp>cyan&shy;uric</SPAN> acid (<SPAN class=mhyp>1,3,5-triazin-<WBR>2,4,6-trione, C<SUB>3</SUB>H<SUB>3</SUB>N<SUB>3</SUB>O<SUB>3</SUB>)</SPAN>, borazine (“inorganic benzene”, N<SUB>3</SUB>B<SUB>3</SUB>H<SUB>6</SUB>), Fe(CO)<SUB>5</SUB>, [ReH<SUB>9</SUB>]<SUP>2−</SUP> (<SPAN class=mhyp>tri&shy;capped tri&shy;gonal prism</SPAN>), <SPAN class=mhyp>cyclo&shy;propane</SPAN>, prismane, <SPAN class=mhyp>1,2,3-trichloro&shy;benzene</SPAN>, <SPAN class=mhyp>tri&shy;phenylene</SPAN>, <NOBR>triptycene</NOBR>, <SPAN class=mhyp>bicyclo[2.2.2]&shy;octane</SPAN>, and several “organic carbon oxides”, <NOBR class=eg>e.&thinsp;g.</NOBR>, C<SUB>12</SUB>O<SUB>12</SUB> (<SPAN class=mhyp>hexa&shy;hydroxy&shy;benzene</SPAN> <SPAN class=mhyp>tris&shy;oxalate</SPAN>) and C<SUB>12</SUB>O<SUB>9</SUB> (mellitic acid anhydride)"
       if (dbg || group.grpname=="D3d") ol.innerHTML += "<P class=plaina>Molecules with D<SUB>3d</SUB> symmetry are quite common. Some examples include the <SPAN class=mhyp>di&shy;thionate</SPAN> <SPAN class=mhyp>di&shy;anion</SPAN> <NOBR>S<SUB>2</SUB>O<SUB class=align>6</SUB><SUP>2−</SUP></NOBR>, ethane, <SPAN class=mhyp>hexamethyl&shy;benzene</SPAN>, <SPAN class=mhyp>hexaethyl&shy;benzene</SPAN>, <SPAN class=mhyp>cyclo&shy;hexane</SPAN> in its crown conformation, diadamantane (diamantane, C<SUB>14</SUB>H<SUB>20</SUB>) and 18-crown-6 alkali metal complexes (the free crown ether has <A href=S6.html>S<SUB>6</SUB></A>). Less common is <SPAN class=mhyp>1,6-dimethyl&shy;dodeca&shy;hedrane</SPAN>. A  more complicated example is one of the possible <SPAN class=mhyp>stereo&shy;iso&shy;mers</SPAN> of <SPAN class=mhyp><I>ortho</I>-hexa&shy;phenylene</SPAN>, [C<SUB>6</SUB>H<SUB>4</SUB>]<SUB>6</SUB>."
       if (dbg || group.grpname=="C4") ol.innerHTML += "<P class=plaina>Molecules with C<SUB>4</SUB> symmetry are exceedingly rare.  An example is <SPAN class=mhyp>1,4,7,10-tetra&shy;methyl-<WBR>1,4,7,10-tetraaza&shy;dodecane</SPAN> (the <I>N</I>-methylated N-analogue of 12-crown-4) in the conformation found in its metal complexes. Some complexes with substituted porphyrines also have that symmetry, <NOBR>e.&thinsp;g.</NOBR> the vanadyl <SPAN class=mhyp>etio&shy;porphyrin&nbsp;I</SPAN> complex. Perhaps, <SPAN class=mhyp>all-<I>cis</I>-<WBR>tetra&shy;benzyl&shy;cyclo&shy;butane</SPAN> also has that symmetry (if it exists). "
       if (dbg || group.grpname=="C4v") ol.innerHTML += "<P class=plaina>Molecules with C<SUB>4v</SUB> symmetry are uncommon. Some examples include SF<SUB>5</SUB>Cl, IF<SUB>5</SUB>, XeOF<SUB>4</SUB>, WOF<SUB>4</SUB>, B<SUB>4</SUB>H<SUB>9</SUB> and the <NOBR>Sn<SUB class=align>9</SUB><SUP>4−</SUP></NOBR>  anion (<SPAN class=mhyp>mono&shy;capped</SPAN> quadratic <SPAN class=mhyp>anti&shy;prisma</SPAN>) found in <NOBR>Cs<SUB>5</SUB>Sn<SUB>9</SUB>(OH)&thinsp;·&thinsp;4&thinsp;NH<SUB>3</SUB></NOBR> (there is also a <SPAN class=mhyp>homo&shy;logous</SPAN> <NOBR>Ge<SUB class=align>9</SUB><SUP>4−</SUP></NOBR>). More common are the  many <SPAN class=mhyp>octa&shy;hedrally</SPAN> coordinated <SPAN class=mhyp>trans&shy;ition</SPAN> metal complexes of the types  MeX<SUB>5</SUB>Y and <I>trans</I>-<WBR><NOBR>MeX<SUB>4</SUB>YZ</NOBR>, <NOBR class=eg>e.&thinsp;g.</NOBR>, HMn(CO)<SUB>5</SUB> and the correspoding <NOBR>Mn(CO)<SUB class=align>5</SUB><SUP>−</SUP></NOBR> anion; also, some porphyrin complexes like titanyl <SPAN class=mhyp><SPAN class=mhyp>phthalo&shy;cyanine</SPAN></SPAN>."
       if (dbg || group.grpname=="C4h") ol.innerHTML += "<P class=plaina>Molecules with C<SUB>4h</SUB> symmetry are rare. A not alltogether harmless example is the swastika-shaped <SPAN class=mhyp>tetraazido&shy;cuprate(II)</SPAN> [Cu(N<SUB>3</SUB>)<SUB>4</SUB>]<SUP>2−</SUP>; slightly less brisant is the <SPAN class=mhyp>tetra&shy;hydrazone</SPAN> of the hypo&shy;thetical <SPAN class=mhyp>cyclo&shy;butane&shy;tetraone</SPAN>, (C=NNH<SUB>2</SUB>)<SUB>4</SUB>. The [OsBr<SUB>2</SUB>((CH<SUB>3</SUB>)<SUB>2</SUB>SO)<SUB>4</SUB>] complex, with four S-coordinated DMSO molecules in the equatorial position, provides a mostly harmless example. <SPAN class=mhyp>Octa&shy;hedrally</SPAN> coordinated <SPAN class=mhyp>tetra&shy;hydroxo</SPAN> complexes <I>trans</I>–[Me(OH)<SUB>4</SUB>X<SUB>2</SUB>] should generally show this symmetry.  Another example are planar complexes with a appropriately <SPAN class=mhyp>tetra&shy;substituted</SPAN> porphyrin ligands like <SPAN class=mhyp>2,7,12,17-tetraalkyl&shy;porphyrines</SPAN> or <SPAN class=mhyp>1,8,15,22-tetraalkoxy&shy;phthalo&shy;cyanines</SPAN>, although the neutral forms of the ligands have lower symmetry; yet another example of this kind is <SPAN class=mhyp>etio&shy;porphyrin&nbsp;I</SPAN> (with each four alternating methyl and ethyl substituents). The <SPAN class=mhyp>cyclo[8]&shy;carbon</SPAN> cluster C<SUB>8</SUB> has been theoretically assigned an “acetylenic”  C<SUB>4h</SUB> structure with alternating bond lengths and bond angles."
       if (dbg || group.grpname=="D4") ol.innerHTML += "<P class=plaina>Molecules with D<SUB>4</SUB> symmetry are rare. Example are <SPAN class=mhyp>octa&shy;nitro&shy;cubane</SPAN> and <SPAN class=mhyp>1,4,7,10-tetrathia&shy;cyclododecane</SPAN> (sulfur analog of 12-crown-4 which, however, has <A class=plaina href=S4.html>S<SUB>4</SUB></A>). <SPAN class=mhyp>Octa&shy;phenyl&shy;uranocene</SPAN> (C<SUB>8</SUB>H<SUB>4</SUB>(C<SUB>6</SUB>H<SUB>5</SUB>)<SUB>4</SUB>)<SUB>2</SUB>U has a D<SUB>4</SUB> structure with nearly eclipsed 8-rings and the phenyl groups in eclipsed (and tilted) positions. Metal complexes of the form [Me(C<SUB>5</SUB>H<SUB>5</SUB>N)<SUB>4</SUB>]<SUP><I>n</I>+</SUP> with equatorial pyridine (or pyrazin) ligands or complexes with <SPAN class=mhyp><I>meso</I>-tetraphenyl&shy;porphin</SPAN> may also show this symmetry. "
       if (dbg || group.grpname=="D4h") ol.innerHTML += "<P class=plaina>Molecules with D<SUB>4h</SUB> symmetry are moderately common. Some examples include XeF<SUB>4</SUB>, <NOBR>Al<SUB class=align>4</SUB><SUP>2−</SUP></NOBR>, <SPAN class=mhyp>cyclo&shy;butane</SPAN> and the anion of squaric acid, H<SUB>2</SUB>C<SUB>4</SUB>O<SUB>4</SUB>. This symmetry arises often in coordination compounds: In mixed <SPAN class=mhyp>octa&shy;hedrally</SPAN> coordinated complexes like the <I>trans</I>-[CoCl<SUB>2</SUB>(H<SUB>2</SUB>O)<SUB>4</SUB>] (symmetry is maybe slightly broken due to the water H atoms); also many porphyrin complexes show approximate or exact D<SUB>4h</SUB> symmetry, <NOBR class=eg>e.&thinsp;g.</NOBR> copper <SPAN class=mhyp><SPAN class=mhyp>phthalo&shy;cyanin</SPAN></SPAN>. Some “<SPAN class=mhyp>octa&shy;hedral</SPAN>” complexes Jahn–Teller-distort <SPAN class=mhyp>tetra&shy;gonally</SPAN> into D<SUB>4h</SUB> (<NOBR class=eg>e.&thinsp;g.</NOBR>,  [CuCl<SUB>6</SUB>]<SUP>4−</SUP>) which in extreme form leads to the quadratically-planar coordination compounds of palladium and platinum (<NOBR class=eg>e.&thinsp;g.</NOBR>, <SPAN class=mhyp>tetra&shy;chloro&shy;palladate(II))</SPAN> but also <SPAN class=mhyp>tetra&shy;chloro&shy;aurate(III)</SPAN>. More unusual examples are the “quadruple bond” complexes <NOBR>[Cl<SUB>4</SUB>Re≣ReCl<SUB>4</SUB>]<SUP>2−</SUP></NOBR> and  <NOBR>[Cl<SUB>4</SUB>Mo≣MoCl<SUB>4</SUB>]<SUP>4−</SUP></NOBR>, although such complexes may also have <A href=D4d.html>D<SUB>4d</SUB></A> isomers. The better-known <SPAN class=mhyp>chromium(II)&shy;acetate di&shy;hydrate</SPAN> has only approximate D<SUB>4h</SUB> symmetry. The planar cyclic cluster C<SUB>8</SUB>B<SUB>4</SUB> provides another unconventional example. "
       if (dbg || group.grpname=="D4d") ol.innerHTML += "<P class=plaina>Molecules with D<SUB>4d</SUB> symmetry are rare and mostly restricted to coordination chemistry. Some examples include the sulfur ring S<SUB>8</SUB>,  <NOBR>B<SUB>10</SUB>H<SUB class=align>10</SUB><SUP>2−</SUP></NOBR>, <NOBR>IF<SUB class=align>8</SUB><SUP>−</SUP></NOBR>, <NOBR>XeF<SUB class=align>8</SUB><SUP>2−</SUP></NOBR>, <SPAN class=mhyp>octa&shy;fluoro&shy;metallates</SPAN> like <NOBR>UF<SUB class=align>8</SUB><SUP>2−</SUP></NOBR> and <NOBR>ReF<SUB class=align>8</SUB><SUP>−</SUP></NOBR>, the <SPAN class=mhyp>bi&shy;nucle&shy;ate</SPAN> <NOBR>[Cl<SUB>4</SUB>Os≡OsCl<SUB>4</SUB>]<SUP>2−</SUP></NOBR> (also has a <A href=D4h.html>D<SUB>4h</SUB></A> isomer)  and some <SPAN class=mhyp>bi&shy;nucle&shy;ate</SPAN> carbonyl compounds like <NOBR>(CO)<SUB>5</SUB>Mn–Mn(CO)<SUB>5</SUB></NOBR> and <NOBR>(CO)<SUB>5</SUB>Re–Re(CO)<SUB>5</SUB></NOBR>. <NOBR>[Re(CH<SUB>3</SUB>)<SUB>8</SUB>]<SUP>2−</SUP></NOBR> and <NOBR>[Re(CN)<SUB>8</SUB>]<SUP>3−</SUP></NOBR> are examples for simple <SPAN class=mhyp>mono&shy;nucleate</SPAN> <SPAN class=mhyp>anti&shy;prisms</SPAN>.  The <NOBR>NbAs<SUB class=align>8</SUB><SUP>3−</SUP></NOBR> ion has the Niobium surrounded by a puckered ring of As atoms. The Zintl type anion <NOBR>Pb<SUB class=align>10</SUB><SUP>2−</SUP></NOBR> also shows this symmetry (<SPAN class=mhyp>bi&shy;capped anti&shy;prisma</SPAN>)."
       if (dbg || group.grpname=="S4") ol.innerHTML += "<P class=plaina>Molecules with S<SUB>4</SUB> symmetry are rare. Some examples include <SPAN class=mhyp>tetraphenyl&shy;methane</SPAN>, <SPAN class=mhyp>tetranitro&shy;methane</SPAN>, <SPAN class=mhyp>tetra&shy;chloro&shy;neopentane</SPAN> (only in solution, when the halogen takes the synclinal position with respect to the central C; in the solid state, the symmetry is <A href=D2d.html>D<SUB>2d</SUB></A>), <SPAN class=mhyp>1,3,5,7-tetra&shy;chloro&shy;cycloocta&shy;tetraene</SPAN>, <SPAN class=mhyp>1,4,7,10-<WBR>tetraoxa&shy;cyclododecan</SPAN> (12-crown-4) and one of the possible <SPAN class=mhyp>stereo&shy;iso&shy;mers</SPAN> of each <SPAN class=mhyp>3,4,7,8-tetra&shy;chloro&shy;spiro[4.4]&shy;nona&shy;tetraene</SPAN>, <SPAN class=mhyp>spiro&shy;pyridinium</SPAN> or the three-ring substitued allene <NOBR>(CHMe)<SUB>2</SUB>&gt;C=C=C&lt;(CHMe)<SUB>2</SUB></NOBR> (<SPAN class=mhyp>1,2,1’,2’-tetra&shy;methyl</SPAN> <SPAN class=mhyp>bis&shy;ethane-allene</SPAN>). Molecules like <SPAN class=mhyp>tetrachloro&shy;tetrafluoro&shy;neopentane</SPAN> C(CHFCl)<SUB>4</SUB> (four chiral centers) have a <I>meso</I> form with a possible S<SUB>4</SUB> <SPAN class=mhyp>confor&shy;mer</SPAN> which is analogous to <SPAN class=mhyp>tetraphenyl&shy;methane</SPAN>."
       if (dbg || group.grpname=="C5h") ol.innerHTML += "<P class=plaina>Molecules with C<SUB>5h</SUB> symmetry are very rare. The <SPAN class=mhyp>pentamethyl&shy;cyclopenta&shy;dienyl</SPAN> anion (Cp<SUP style='vertical-align:25%'>*</SUP>) might qualify (lest it should prefer a <A href=C5v.html>C<SUB>5v</SUB></A> conformation, as it does in its ocene complexes)."
       if (dbg || group.grpname=="C5") ol.innerHTML += "<P class=plaina>Molecules with C<SUB>5</SUB> symmetry are very rare.  A possible example is <SPAN class=mhyp>1,3,5,7,9-penta&shy;chloro&shy;corannulene</SPAN>. More examples come from <NOBR>metallocene</NOBR> chemistry, <NOBR class=eg>e.&thinsp;g.</NOBR>, <SPAN class=mhyp>pentaphenyl&shy;ferrocene</SPAN> (&eta;<SUP>5</SUP>−C<SUB>5</SUB>H<SUB>5</SUB>)Fe(&eta;<SUP>5</SUP>−C<SUB>5</SUB>(C<SUB>6</SUB>H<SUB>5</SUB>)<SUB>5</SUB>). While the structure of unsubstituted <SPAN class=mhyp>pentaphospha&shy;ferrocene</SPAN> <NOBR>(&eta;<SUP>5</SUP>−C<SUB>5</SUB>H<SUB>5</SUB>)Fe(&eta;<SUP>5</SUP>−P<SUB>5</SUB>)</NOBR> has not yet been experimentally determined, the Cp<SUP style='vertical-align:25%'>*</SUP> derivative <NOBR>(&eta;<SUP>5</SUP>−C<SUB>5</SUB>(CH<SUB>3</SUB>)<SUB>5</SUB>)Fe(&eta;<SUP>5</SUP>−P<SUB>5</SUB>)</NOBR> has been found  C<SUB>5</SUB>, because the rings turned out neither staggered nor eclipsed but intermediate."
       if (dbg || group.grpname=="C5v") ol.innerHTML += "<P class=plaina>Molecules with C<SUB>5v</SUB> symmetry are quite rare. A good example is corannulene; also, a <SPAN class=mhyp>penta&shy;gonal</SPAN> pyramid is found in <NOBR>IOF<SUB class=align>5</SUB><SUP>2−</SUP></NOBR> and has been predicted as the minimum structure of the B<SUB>6</SUB> cluster. More numerous examples come from <SPAN class=mhyp>metallocene</SPAN> chemistry, <NOBR class=eg>e.&thinsp;g.</NOBR>, the half sandwich <NOBR>(&eta;<SUP>5</SUP>–C<SUB>5</SUB>H<SUB>5</SUB>)Ni(NO)</NOBR> or the open half sandwich <SPAN class=mhyp>cyclopendadienyl&shy;indium(I)</SPAN> <NOBR>(&eta;<SUP>5</SUP>–C<SUB>5</SUB>H<SUB>5</SUB>)In</NOBR>, which is polymeric in the solid, but monomeric in the gas phase. C<SUB>5v</SUB> ist also the symmetry of mixed ocenes where one metal ion is sandwiched by two different Cp-derived ligands (Cp, Cp<SUP style='vertical-align:25%'>*</SUP>, CpCl<SUB>5</SUB>), in both staggered and eclipsed conformation; an interesting example is the maximum unsymmetric but perfectly eclipsed C<SUB>5v</SUB> structure of the triple-decker <NOBR>[(&eta;<SUP>5</SUP>–(C<SUB>5</SUB>H<SUB>5</SUB>)Fe(&mu;,&eta;<SUP>5</SUP>–P<SUB>5</SUB>)Ru(C<SUB>5</SUB>(CH<SUB>3</SUB>)<SUB>5</SUB>)]<SUP>+</SUP></NOBR>.  Lastly, C<SUB>5v</SUB> can arise from broken <A href=Ih.html class=mhyp>icosa&shy;hedral</A> symmetry as in <SPAN class=mhyp><I>closo</I>–aza&shy;dodeca&shy;borane</SPAN> NB<SUB>11</SUB>H<SUB>12</SUB>, the  <NOBR>carborane</NOBR> acid <NOBR>anion</NOBR> <NOBR>CHB<SUB>11</SUB>Cl<SUB class=align>11</SUB><SUP>− </SUP></NOBR>, and also the <SPAN class=mhyp>undeca&shy;borate</SPAN> <NOBR>dianion</NOBR> <NOBR>B<SUB>11</SUB>H<SUB class=align>11</SUB><SUP>2−</SUP></NOBR>."
       if (dbg || group.grpname=="D5") ol.innerHTML += "<P class=plaina>Molecules with D<SUB>5</SUB> symmetry are rare. Obvious examples include the <SPAN class=mhyp>pentaphenyl&shy;cyclopenta&shy;dienyl</SPAN> anion <NOBR>C<SUB>5</SUB>(C<SUB>6</SUB>H<SUB>5</SUB>)<SUB class=align>5</SUB><SUP>−</SUP></NOBR> and perhaps also its even larger homologue <NOBR>C<SUB>5</SUB>(4-<I>tert</I>-Bu–C<SUB>6</SUB>H<SUB>4</SUB>)<SUB class=align>5</SUB><SUP>−</SUP></NOBR> (dubbed Cp<SUP style='font-size:60%; vertical-align:75% '>BIG</SUP>); the macrocylic molecule <SPAN class=mhyp>1,3-dimethoxy-pillar[5]&shy;arene</SPAN> provides another example from organic chemistry.  More examples come from coordination chemistry of large ions, <NOBR class=eg>e.&thinsp;g.</NOBR>, <SPAN class=mhyp>pentakis&shy;(tetrahydrofurane)</SPAN> complexes of lanthanoid metal ions [Ln(thf)<SUB>5</SUB>]<SUP>3+</SUP> or solvated uranyl [UO<SUB>2</SUB>(H<SUB>2</SUB>O)<SUB>5</SUB>]<SUP>2+</SUP>. Also, D<SUB>5</SUB> can arise by symmetry break in <A class=mhyp href=Ih.html>icosa&shy;hedral</A> molecules, <NOBR class=eg>e.&thinsp;g.</NOBR> partially hydrogenated C<SUB>60</SUB>."
       if (dbg || group.grpname=="D5h") ol.innerHTML += "<P class=plaina>Molecules with D<SUB>5h</SUB> symmetry are rare. Most examples center around the the <SPAN class=mhyp>cyclo&shy;pentadienyl</SPAN> anion and its derivatives, for example, the eclipsed <SPAN class=mhyp>metallocene</SPAN> <NOBR>(&eta;<SUP>5</SUP>–C<SUB>5</SUB>H<SUB>5</SUB>)<SUB>2</SUB>Os</NOBR>.  The <SPAN class=mhyp>deca&shy;phospha</SPAN> <SPAN class=mhyp>titanocene</SPAN> <SPAN class=mhyp>dianion</SPAN> <NOBR>[&eta;<SUP>5</SUP>–(P<SUB>5</SUB>)<SUB>2</SUB>Ti]<SUP>2−</SUP></NOBR> with two eclipsed P<SUB>5</SUB> rings also deserves mention; <NOBR>ferrocene</NOBR> has an eclipsed D<SUB>5h</SUB> structure in the gas phase, but features an approximate <A href=D5d.html>D<SUB>5d</SUB></A> geometry on the crystal.  However, there are also independent examples of this symmetry: croconate, <SPAN class=mhyp>pentafluoro&shy;xenate(VI)</SPAN> <NOBR>XeF<SUB class=align>5</SUB><SUP>−</SUP></NOBR> and several species with <SPAN class=mhyp>penta&shy;gonal bi&shy;pyramidal</SPAN> structure: <NOBR>Re(CN)<SUB class=align>7</SUB><SUP>3−</SUP></NOBR>, <NOBR>Re(CN)<SUB class=align>7</SUB><SUP>4−</SUP></NOBR>, <NOBR>IF<SUB>7</SUB>, ZrF<SUB class=align>7</SUB><SUP>3−</SUP></NOBR> and <NOBR>B<SUB>7</SUB>Br<SUB class=align>7</SUB><SUP>2−</SUP></NOBR>.  The hydrocarbon <SPAN class=mhyp>penta&shy;prismane</SPAN> and the fullerene C<SUB>70</SUB> also fall into that symmetry, and the <SPAN class=mhyp>cucurbit[5]&shy;uril</SPAN> macro&shy;cycle was found approximately D<SUB>5h</SUB> in the crystal. Preliminary theoretical investigations suggest the existance of “molecular wheels”, <NOBR class=eg>e.&thinsp;g.</NOBR>, TiC<SUB>5</SUB>B<SUB>5</SUB> or TiN<SUB>5</SUB>B<SUB>5</SUB>, in which a <SPAN class=mhyp>trans&shy;ition</SPAN> metal atom is in-plane coordinated by ten lighter atoms in alternating fashion. Lastly, a <SPAN class=mhyp>cyclo[10]&shy;carbon</SPAN> cluster C<SUB>10</SUB> with a planar “cumulenic” D<SUB>5h</SUB> structure has been studied experimentally and theoretically; at appears to <SPAN class=mhyp>pseudo&shy;rotate</SPAN> around a <A href=D10h.html>D<SUB>10h</SUB></A> second-order saddle point and is therefore very floppy. "
       if (dbg || group.grpname=="D5d") ol.innerHTML += "<P class=plaina>Molecules with D<SUB>5d</SUB> symmetry are rare and mostly restricted to <SPAN class=mhyp>cyclo&shy;pentadienyl</SPAN> derivatives. The classical examples are the staggered conformers of <SPAN class=mhyp>metallocenes</SPAN> <NOBR>&eta;<SUP>5</SUP>–(C<SUB>5</SUB>H<SUB>5</SUB>)<SUB>2</SUB>Me</NOBR> (<SPAN class=mhyp>ferrocene</SPAN>, <SPAN class=mhyp>vanadocene</SPAN>) found in the solid state; in the gas phase, these molecules adopt eclipsed forms (<A href=D5h.html>D<SUB>5h</SUB></A>). The preference for the staggered conformation is stronger in <SPAN class=mhyp>deca&shy;methyl</SPAN> <SPAN class=mhyp>metallocenes</SPAN>, <NOBR class=eg>e.&thinsp;g.</NOBR>, <NOBR>(&eta;<SUP>5</SUP>–C<SUB>5</SUB>(CH<SUB>3</SUB>)<SUB>5</SUB>)<SUB>2</SUB>Fe</NOBR> (also known as <NOBR>FeCp<SUB class=align>2</SUB><SUP style='vertical-align:25%'>*&nbsp;</SUP></NOBR>); on the other side, the methyl hydrogen atoms are typically found not to align to the D<SUB>5d</SUB> symmetry in the crystal. Independently, D<SUB>5d</SUB> symmetry can also arise by proper substitution of <A href=Ih.html class=mhyp>icosa&shy;hedral</A> molecules, <NOBR class=eg>e&thinsp;g.</NOBR> <I>para</I>-<WBR><NOBR>dicarborane</NOBR>; alternatively, it is possible to build a D<SUB>5d</SUB> structure by extending an icosahedron, <NOBR class=eg>e.&thinsp;g.</NOBR>, in one possible C<SUB>80</SUB> fullerene."
       if (dbg || group.grpname=="C6") ol.innerHTML += "<P class=plaina>Molecules with C<SUB>6</SUB> symmetry are rare. An example is <SPAN class=mhyp>cyclo&shy;hexaamylose</SPAN> (six glucose molecules joined into a ring by 1,4 glycosidic links)."
       if (dbg || group.grpname=="C6h") ol.innerHTML += "<P class=plaina>Molecules with C<SUB>6h</SUB> symmetry are rare. Possible examples are the <SPAN class=mhyp>hexa&shy;bridged</SPAN> <SPAN class=mhyp>[3.3.3.3.3.3]&shy;cyclo&shy;phane</SPAN>, <SPAN class=mhyp>hexa&shy;hydroxy&shy;benzene</SPAN>, <SPAN class=mhyp>hexa&shy;methoxy&shy;benzene</SPAN> and <SPAN class=mhyp>hexakis&shy;(<I>N</I>,<I>N</I>-<WBR>dimethyl&shy;amino)&shy;benzene</SPAN>; an appropriately substituted coronene or kekulene should also show this symmetry, <NOBR class=eg>e.&thinsp;g.</NOBR>, <SPAN class=mhyp>1,3,5,7,9,11-hexaaza&shy;coronene</SPAN>. The <SPAN class=mhyp>cyclo[12]&shy;carbon</SPAN> cluster C<SUB>12</SUB> has been concluded to exist in an “acetylenic” C<SUB>6h</SUB> structure."
       if (dbg || group.grpname=="C6v") ol.innerHTML += "<P class=plaina>Molecules with C<SUB>6v</SUB> symmetry are very rare; examples are <SPAN class=mhyp>&eta;<SUP>6</SUP>-hexamethyl&shy;benzene,&eta;<SUP>6</SUP>-benzene&shy;chromium</SPAN> (with eclipsed rings), or the half-sandwich  <SPAN class=mhyp>(&eta;<SUP>6</SUP>–hexamethyl&shy;benzene)&shy;gallium(I)</SPAN> <SPAN class=mhyp>tetrabromo&shy;gallate(III)</SPAN> with the pyramidal <NOBR>[(&eta;<SUP>6</SUP>–C<SUB>6</SUB>(CH<SUB>3</SUB>)<SUB>6</SUB>)Ga]<SUP>+</SUP></NOBR> cat&shy;ion. The structure of the <NOBR>B<SUB class=align>7</SUB><SUP>+</SUP></NOBR> cat&shy;ion has also been predicted to be a <SPAN class=mhyp>hexa&shy;gonal</SPAN> pyramid, and there is a “<SPAN class=mhyp>boro&shy;phene</SPAN>” B<SUB>36</SUB> cluster with slightly nonplanar (flat bowl) C<SUB>6v</SUB> symmetry."
       if (dbg || group.grpname=="D6") ol.innerHTML += "<P class=plaina>Molecules with D<SUB>6</SUB> symmetry are rare. The classical example is the solid structure of <SPAN class=mhyp>hexaphenyl&shy;benzene</SPAN>, although this has only approximate <SPAN class=mhyp>six&shy;fold</SPAN> symmetry, and in the gas phase the molecule adopts an approximate <A href=D6h.html class=plaina>D<SUB>6h</SUB></A> structure (with almost perpendicular phenyl substituents). Another good candidate, <SPAN class=mhyp>hexanitro&shy;benzene</SPAN>, has slightly reduced symmetry in the solid state. Possibly, an appropriately <SPAN class=mhyp>hexa&shy;phenylated</SPAN> kekulene would be a better example. D<SUB>6</SUB> has also been claimed for higher <SPAN class=mhyp>super&shy;phanes</SPAN> (<NOBR class=eg>e.&thinsp;g.</NOBR>, the <SPAN class=mhyp>hexa&shy;bridged</SPAN> <SPAN class=mhyp>[4.4.4.4.4.4]&shy;cyclo&shy;phane</SPAN>), for the <SPAN class=mhyp>bis(benzene)&shy;chromium</SPAN> cat&shy;ion in <NOBR>[Cr(&eta;<SUP>6</SUP>–C<SUB>6</SUB>H<SUB>6</SUB>)<SUB>2</SUB>]<SUP>+</SUP></NOBR> <SPAN class=mhyp>carb&shy;oxylates</SPAN> and for a C<SUB>24</SUB> fullerene."
       if (dbg || group.grpname=="D6h") ol.innerHTML += "<P class=plaina>Molecules with D<SUB>6h</SUB> symmetry are surprisingly rare. The common example is benzene, but relatively few derivatives can maintain the high symmetry, <NOBR class=eg>e.&thinsp;g.</NOBR> coronene, <SPAN class=mhyp>[2.2.2.2.2.2]&shy;cyclo&shy;phane</SPAN> <SPAN class=mhyp>(“super&shy;phane”)</SPAN>, <SPAN class=mhyp>bis(benzene)&shy;chromium</SPAN> and the rhodizonate <SPAN class=mhyp>di&shy;anion</SPAN>; among the “<SPAN class=mhyp>homo&shy;logues</SPAN>”, 18-annulene and kekulene ([12]–<NOBR>coronaphen</NOBR>)."
       if (dbg || group.grpname=="D6d") ol.innerHTML += "<P class=plaina>Molecules with D<SUB>6d</SUB> symmetry are very rare. Bis(benzene) <SPAN class=mhyp>trans&shy;ition</SPAN> metal complexes are sometimes claimed to be D<SUB>6d</SUB> (staggered conformation), yet these systems are apparently extremely flexible with a slight preference for eclipsed <A  class=plaina href='D6h.html'>D<SUB>6h</SUB></A>.  Fullerene structures that possibly show this symmetry include C<SUB>24</SUB> and C<SUB>72</SUB>, both of which are problematic. There are also theoretical results on an Au<SUB>26</SUB> cluster, formed by four staggered gold hexagons and two capping atoms at the terminal faces. "
       if (dbg || group.grpname=="S6") ol.innerHTML += "<P class=plaina>Molecules with S<SUB>6</SUB> symmetry are rare. Good examples are <SPAN class=mhyp>hexaamino&shy;benzene</SPAN>, [6.5]coronane and 18-crown-6, although the latter often adopts <A href=D3d.html>D<SUB>3d</SUB></A> in complexes. The crystal structure of <SPAN class=mhyp>hexabenzyl&shy;benzene</SPAN> is approximately S<SUB>6</SUB>, but it is significantly distorted because of site symmetry effects.  While <SPAN class=mhyp>hexaphenyl&shy;ethane</SPAN> has never be synthesized and the similar <SPAN class=mhyp>hexanitro&shy;ethane</SPAN> has been found to adopt  a <A href=D3d.html>D<SUB>3d</SUB></A> conformation, <SPAN class=mhyp>hexabenzyl&shy;ethane</SPAN> could possibly exist as an S<SUB>6</SUB></A> <SPAN class=mhyp>confor&shy;mer</SPAN> in addition to a pair of chiral <A href=D3.html>D<SUB>3</SUB></A> <SPAN class=mhyp>en&shy;antio&shy;mers</SPAN>. <P class=plaina>An interesting yet complicated case is a <SPAN class=mhyp>hexa&shy;nucleate</SPAN> neutral complex  Fe<SUB>6</SUB>Cl<SUB>6</SUB>[(C<SUB>6</SUB>H<SUB>5</SUB>)CH(CH<SUB>3</SUB>)N(C<SUB>2</SUB>H<SUB>4</SUB>O)<SUB>2</SUB>]<SUB>6</SUB> with the chiral ligand <SPAN class=mhyp><I>N</I>-(1-phenylethyl)&shy;diethanolamine</SPAN> (<SPAN class=mhyp><I>N</I>,<I>N</I>-bis(2-hydroxyethyl)<WBR>-1-phenylethyl&shy;amine</SPAN>, <SPAN class=mhyp>2,2’-[(1-phenylethyl)&shy;imino]&shy;diethanol</SPAN>). This “ferric wheel” consists of six dis&shy;torted FeO<SUB>4</SUB>Cl<SUB>2</SUB> octahedra which are each face-connected by one Cl atom and two O atoms <I>of different ligand molecules</I> per link; a mixture of the <A href=D3.html>D<SUB>3</SUB></A> <SPAN class=mhyp>en&shy;antio&shy;mers</SPAN> reacts, by ligand exchange, towards an S<SUB>6</SUB> <I>meso</I> form, with alternating R and S ligands along the ring."
       if (dbg || group.grpname=="C8v") ol.innerHTML += "<P class=plaina>Molecules with C<SUB>8v</SUB> symmetry are exceedingly rare. The best examples are <SPAN class=mhyp>cyclo&shy;octa&shy;tetraenide</SPAN> open half-sandwich complexes like <NOBR>&eta;<SUP>8</SUP>–(C<SUB>8</SUB>H<SUB>8</SUB>)La</NOBR> and  <NOBR>&eta;<SUP>8</SUP>–(C<SUB>8</SUB>H<SUB>8</SUB>)La<SUP>+</SUP></NOBR> which have been studied by <SPAN class=mhyp>photo&shy;electron</SPAN> <SPAN class=mhyp>spectro&shy;scopy</SPAN>. Evidence from both calculations and <SPAN class=mhyp>photo&shy;electron</SPAN> <SPAN class=mhyp>spectro&shy;scopy</SPAN> indicate an regular <SPAN class=mhyp>octo&shy;gonal</SPAN> pyramid as the structure of the <NOBR>FeB<SUB class=align>8</SUB><SUP>−</SUB></NOBR> cluster. Moreover, there are preliminary theoretical calculations indicating a pyramidal  TiB<SUB>8</SUB> cluster, although the planar <A href=C2v.html>C<SUB>2v</SUB></A> (which looks like a circle with one sector missing) isomer appears slightly more stable."
       if (dbg || group.grpname=="C8h") ol.innerHTML += "<P class=plaina>Molecules with C<SUB>8h</SUB> symmetry are exceedingly rare, with perhaps no well-characterized example. The <SPAN class=mhyp>cyclo[16]&shy;carbon</SPAN> cluster C<SUB>16</SUB> should adopt an “acetylenic” C<SUB>8h</SUB> structure with alternating bond angles and bond lengths."
       if (dbg || group.grpname=="D8h") ol.innerHTML += "<P class=plaina>Molecules with D<SUB>8h</SUB> symmetry are very rare and almost restricted to the <SPAN class=mhyp>cyclo&shy;octa&shy;tetraenide</SPAN> <SPAN class=mhyp>di&shy;anion</SPAN> and some of its metal complexes, like <SPAN class=mhyp>uranocene</SPAN> <NOBR>[(&eta;<SUP>8</SUP>–C<SUB>8</SUB>H<SUB>8</SUB>)<SUB>2</SUB>U]</NOBR> and analogous compounds of higher actinoids and cerium.  Also, the C<SUB>16</SUB>S<SUB>8</SUB> sulflower molecule is based on a carbon 8-ring. Independent examples are the <NOBR>B<SUB class=align>9</SUB><SUP >−</SUP></NOBR> anion and the clusters B<SUB>8</SUB>P and B<SUB>8</SUB>Si with an  atom in the center of a boron octogon, although experimental data is lacking."
       if (dbg || group.grpname=="D8d") ol.innerHTML += "<P class=plaina>Molecules with D<SUB>8d</SUB> symmetry are exceedingly rare. A few lanthanoid(III) ocenes with <SPAN class=mhyp>cyclo&shy;octa&shy;tetraene</SPAN> have been reported to prefer the staggered conformation and thus D<SUB>8d</SUB> symmetry, <NOBR class=eg>e.&thinsp;g.</NOBR>, the <NOBR>[(&eta;<SUP>8</SUP>–C<SUB>8</SUB>H<SUB>8</SUB>)<SUB>2</SUB>Ce]<SUP>−</SUP></NOBR> anion, although its structure is distorted by both the non&shy;crystallo&shy;graphic sym&shy;metry and the presence of bulky counter&shy;ions; in <NOBR>[(&eta;<SUP>8</SUP>–C<SUB>8</SUB>H<SUB>8</SUB>)<SUB>2</SUB>Er]<SUP>−</SUP></NOBR>, additionally high disorder was found with respect to the conformation of the two rings. In any case, conformational preferences appear very weak, and also influenced by the nature of the counterion. "
       if (dbg || group.grpname=="S8") ol.innerHTML += "<P class=plaina>Molecules with S<SUB>8</SUB> symmetry are very rare, and it is hard to find examples among reasonably small molecules. The best examples come from sandwich complexes of a substituted porphyrin ligand with heavy rare earth cations; the ligand used was <SPAN class=mhyp>1,8,15,22-tetrakis&shy;(3-pentoxy)&shy;phthalo&shy;cyanin</SPAN> which has itself <A href=C4h.html>C<SUB>4h</SUB></A> symmetry as <NOBR>dianion</NOBR>, giving rise to an S<SUB>8</SUB> “double propeller” in the double-decker complex. A <SPAN class=mhyp>cyclo&shy;octa&shy;tetraenide</SPAN> <NOBR>dianion</NOBR> with eight <SPAN class=mhyp>equi&shy;valent</SPAN> chiral substituents must have three achiral <I>meso</I> forms; one of these (with alternating chiral configurations along the ring) will exhibit S<SUB>8</SUB> symmetry, but I am not aware of any real example."
       if (dbg || group.grpname=="C7v") ol.innerHTML += "<P class=plaina>Molecules with C<SUB>7v</SUB>  symmetry are extremely rare. In coordination compounds like <NOBR>[(&eta;<SUP>7</SUP>–C<SUB>7</SUB>H<SUB>7</SUB>)Mo(CO)<SUB>3</SUB>]</NOBR>, the symmetry is reduced to  <A class=plaina href=C1h.html>C<SUB>s</SUB></A>, but the  <NOBR>[(C<SUB>7</SUB>H<SUB>7</SUB>)Mo]</NOBR> moiety has approximate  C<SUB>7v</SUB> symmetry. Theoretical calculations indicate a <SPAN class=mhyp>hepta&shy;gonal</SPAN> pyramid structure for the TiB<SUB>7</SUB> cluster, although a planar <A href=C2v.html>C<SUB>2v</SUB></A> isomer appears slightly more stable; there are also results for an ScN<SUB>7</SUB> cluster, which can be viewed as an &eta;<SUP>7</SUP> complex of Sc<SUP>3+</SUP> and the elusive <A href=D7h.html>D<SUB>7h</SUB></A> species N<SUB class=align>7</SUB><SUP>3−</SUP>."
       if (dbg || group.grpname=="C7h") ol.innerHTML += "<P class=plaina>Molecules with C<SUB>7h</SUB>  symmetry are highly exotic, if they exist at all. Although small monocyclic carbon clusters C<SUB>4<I>n</I>+2</SUB>  prefer “cumulenic” D<SUB>(2<I>n</I>+1)h</SUB> structures, larger ones distort into C<SUB>(2<I>n</I>+1)h</SUB> “acetylenic” structures by bond-angle alternation. A high-level theoretical study (CCSD) found the C<SUB>14</SUB> <SPAN class=mhyp>cyclo[14]&shy;carbon</SPAN> cluster to be the smallest with an “acetylenic” structure type, and thus C<SUB>7h</SUB>  symmetry."
       if (dbg || group.grpname=="D7d") ol.innerHTML += "<P class=plaina>Molecules with D<SUB>7d</SUB>  symmetry are extremely rare. A possible example might be actinoid compounds of the type <NOBR>[(&eta;<SUP>7</SUP>–C<SUB>7</SUB>H<SUB>7</SUB>)<SUB>2</SUB>U]<SUP>−</SUP></NOBR>, which is predicted by calculation to favour D<SUB>7d</SUB> over <A href=D7h.html class=plaina>D<SUB>7h</SUB></A> by a small energy amount. There are also theoretical results on a D<SUB>7d</SUB> “fullerene” C<SUB>84</SUB> with two staggered 7-rings. "
       if (dbg || group.grpname=="D7h") ol.innerHTML += "<P class=plaina>Molecules with D<SUB>7h</SUB>  symmetry are very rare, the only widely quoted example being the tropylium cat&shy;ion <NOBR>C<SUB>7</SUB>H<SUB class=align>7</SUB><SUP>+</SUP></NOBR> and a few of its derivatives. The septulene molecule (“homologue” of kekulene) possibly also exhibits D<SUB>7h</SUB> in the gas phase, although it is necessarily distorted in the crystal. Theoretical studies have found some more candidates: The <SPAN class=mhyp>cucurbit[7]&shy;uril</SPAN> macro&shy;cycle has a D<SUB>7h</SUB> conformer, planar heptagonal structures  have been found for the CB<SUB class=align>7</SUB><SUP >−</SUP></NOBR>, <NOBR>B<SUB class=align>8</SUB><SUP >−</SUP></NOBR> and <NOBR>B<SUB class=align>8</SUB><SUP>2−</SUP></NOBR> anions, and there are even results for a regular heptagonal N<SUB class=align>7</SUB><SUP>3−</SUP> trianion (10&pi; Hückel aromatic). While the C<SUB>14</SUB> cyclo[14]&shy;carbon cluster has long been assumed to exist in a “cumulenic” form with D<SUB>7h</SUB> symmetry, high-level calculations indicate a <A href=C7h.html>C<SUB>7h</SUB></A> “acetylenic” structure instead. "
       if (dbg || group.grpname=="D9h") ol.innerHTML += "<P class=plaina>Molecules with D<SUB>9h</SUB>  symmetry are very rare, with perhaps no fully characterized example. The textbook example is the <SPAN class=mhyp>cyclo&shy;nona&shy;tetraenyl</SPAN> anion, <NOBR>C<SUB>9</SUB>H<SUB class=align>9</SUB><SUP>−</SUP></NOBR>. Theoretical studies also indicate D<SUB>9h</SUB> for the <NOBR>VB<SUB class=align>9</SUB><SUP >2−</SUP></NOBR> <SPAN class=mhyp>di&shy;anion</SPAN>, and there is both experimental and theoretical support for a planar <NOBR>FeB<SUB class=align>9</SUB><SUP>−</SUB></NOBR> monoanion."
       if (dbg || group.grpname=="C9v") ol.innerHTML += "<P class=plaina>Molecules with C<SUB>9v</SUB>  symmetry are very rare, with perhaps no fully characterized example. However, theoretical studies and <SPAN class=mhyp>photo&shy;electron</SPAN> <SPAN class=mhyp>spectro&shy;scopy</SPAN> indicate <SPAN class=mhyp>nona&shy;gonal</SPAN> pyramidal structure for a number of boron–metal clusters including VB<SUB>9</SUB> and the <NOBR>NbB<SUB class=align>9</SUB><SUP >2−</SUP></NOBR> and <NOBR>TaB<SUB class=align>9</SUB><SUP >2−</SUP></NOBR>  <SPAN class=mhyp>di&shy;anions</SPAN>. There is also a preliminary theoretical result on an umbrella-shaped TiB<SUB>10</SUB> cluster, though it was found less stable than the planar <A href=D10h.html>D<SUB>10h</SUB></A> isomer."
       if (dbg || group.grpname=="C9h") ol.innerHTML += "<P class=plaina>Molecules with C<SUB>9h</SUB>  symmetry are highly exotic, if they exist at all. Although small monocyclic carbon clusters C<SUB>4<I>n</I>+2</SUB> should prefer “cumulenic” D<SUB>(2<I>n</I>+1)h</SUB> structures, the <SPAN class=mhyp>cyclo[18]&shy;carbon</SPAN> cluster (C<SUB>18</SUB>) has been found in an “acetylenic” C<SUB>9h</SUB> form by various theoretical studies, including a study employing CCSD wavefunctions."
       if (dbg || group.grpname=="C10h") ol.innerHTML += "<P class=plaina>Molecules with C<SUB>10h</SUB>  symmetry are highly exotic, if they exist at all. From theoretical considerations, an “acetylenic” C<SUB>2<I>n</I>h</SUB> structure is expected for monocyclic carbon clusters C<SUB>4<I>n</I></SUB>; thus, the <SPAN class=mhyp>cyclo[20]&shy;carbon</SPAN> cluster (C<SUB>20</SUB>) should prefer C<SUB>10h</SUB> symmetry."
       if (dbg || group.grpname=="D10h") ol.innerHTML += "<P class=plaina>Molecules with D<SUB>10h</SUB>  symmetry are very rare, with perhaps no fully characterized example. However, <SPAN class=mhyp>photo&shy;electron</SPAN> <SPAN class=mhyp>spectro&shy;scopy</SPAN> and theoretical calculations indicate  planar D<SUB>10h</SUB> structures for the <NOBR>TaB<SUB class=align>10</SUB><SUP >&thinsp;−  </SUP></NOBR> and <NOBR>AuB<SUB class=align>10</SUB><SUP>&thinsp;−  </SUP></NOBR> anions; there are also preliminary theoretical results on neutral clusters (“molecular wheels”) TiB<SUB>10</SUB>, TiC<SUB>10</SUB> and TiN<SUB>10</SUB>."
       if (dbg || group.grpname=="S10") ol.innerHTML += "<P class=plaina>Molecules with S<SUB>10</SUB> symmetry are very rare; yet this symmetry is commonly found in <SPAN class=mhyp>decaaryl&shy;metallocenes</SPAN> like <SPAN class=mhyp>decaphenyl&shy;ferrocene</SPAN> or <SPAN class=mhyp>decaphenyl&shy;nickelocene</SPAN>. A completely different class of iron complexes are the “ferric wheels”, rings of face-connected distorted FeO<SUB>6</SUB> octahedra. The <SPAN class=mhyp>deca&shy;nucleate</SPAN> wheel <NOBR>Fe<SUB>10</SUB>[C(CH<SUB>3</SUB>)<SUB>3</SUB>CO<SUB>2</SUB>]<SUB>10</SUB>(CH<SUB>3</SUB>O)<SUB>20</SUB></NOBR> is an almost planar ring of ten Fe(III) atoms connected by one carboxylate (equatorial) and two alkoxide ions (axial) per link; it has idealized S<SUB>10</SUB> symmetry. In principle, this symmetry should also be possible for substituted derivatives of icosahedral molecules."
       if (dbg || group.grpname=="D12h") ol.innerHTML += "<P class=plaina>Molecules with D<SUB>12h</SUB>  symmetry are extremely rare, with perhaps no fully characterized example. The B<SUB>12</SUB> cluster has been predicted to adopt a regular dodecagonal structure by theoretical calculations."
       if (dbg || group.grpname=="C11h") ol.innerHTML += "<P class=plaina>Molecules with C<SUB>11h</SUB>  symmetry are extremely rare, with perhaps no fully characterized example. The C<SUB>22</SUB> <SPAN class=mhyp>cyclo[22]&shy;carbon</SPAN> cluster was theoretically characterized as “acetylenic” with a C<SUB>11h</SUB> ground state structure in a study employing CCSD wavefunctions."
       if (dbg || group.grpname=="T") ol.innerHTML += "<P class=plaina>Molecules with T symmetry are rare. A good example is <SPAN class=mhyp>hexa&shy;ethylene&shy;tetramine</SPAN> (<SPAN class=mhyp>homo&shy;log</SPAN> of <SPAN class=mhyp>uro&shy;tropine</SPAN>), which has an N<SUB>4</SUB> <SPAN class=mhyp>tetra&shy;hedron</SPAN> with edges bridged by twisted ethylene groups. However, T symmetry more usually arises due to symmetry breaking of <A href=Td.html class=plaina>T<SUB>d</SUB></A> by substituents, <NOBR class=eg>e.&thinsp;g.</NOBR> in <SPAN class=mhyp>tetrakis&shy;(<I>tert</I>-butyl)&shy;tetrahedrane</SPAN>, Pt(PF<SUB>3</SUB>)<SUB>4</SUB> and Zr[BH<SUB>4</SUB>]<SUB>4</SUB>. In these compounds, the tetrahedral ligands are rotated about the axes between ligand and central atom, which breaks all the mirror symmetry elements; only the last example appears conformationally stable. In <SPAN class=mhyp>tetrakis&shy;(triphenyl&shy;phosphane)&shy;nickel(0)</SPAN> ((C<SUB>6</SUB>H<SUB>5</SUB>)<SUB>3</SUB>P)<SUB>4</SUB>Ni, the planar phenyl groups break the symmetry from T<SUB>d</SUB> to T because they do not align with the &sigma;<SUB>d</SUB> planes. Other examples are provided by <SPAN class=mhyp>octa&shy;hedral</SPAN> metal complexes with six molecules <SPAN class=mhyp>tetrahydro&shy;furane</SPAN> [Me(C<SUB>4</SUB>H<SUB>8</SUB>O)<SUB>6</SUB>]<SUP><I>n</I>+</SUP>, where the <SPAN class=mhyp>non&shy;planar</SPAN> (twisted) THF-rings break all symmetry planes and reduce the C<SUB>4</SUB> axes to C<SUB>2</SUB>. The C<SUB>60</SUB>F<SUB>36</SUB> fullerene derivative has a substitution pattern which reduces the <A href=Ih.html class=mhyp>icosa&shy;hedral</A> symmetry of the parent compound to T. "
       if (dbg || group.grpname=="Th") ol.innerHTML += "<P class=plaina>Molecules with T<SUB>h</SUB> symmetry are considered rare, although T<SUB>h</SUB> is the correct point group of many common “<SPAN class=mhyp>octa&shy;hedral</SPAN>” <SPAN class=mhyp>hexa&shy;aquo</SPAN> complexes [Me(H<SUB>2</SUB>O)<SUB>6</SUB>]<SUP><I>n</I>+</SUP>; the symmetry breaking from <A href=Oh.html>O<SUB>h</SUB></A> to T<SUB>h</SUB> arises from the loss of the C<SUB>4</SUB> element (reduced to C<SUB>2</SUB>) when the H<SUB>2</SUB>O molecules attach to the <SPAN class=mhyp>octa&shy;hedron</SPAN> vertices. The effect is better visible with larger planar ligands like nitrate or pyridine, <NOBR class=eg>e.&thinsp;g.</NOBR>, [Ce(NO<SUB>3</SUB>)<SUB>6</SUB>]<SUP>2−</SUP> or [Fe(C<SUB>5</SUB>H<SUB>5</SUB>N)<SUB>6</SUB>]<SUP>2+</SUP>. Main group metal <SPAN class=mhyp>hexa&shy;phenyl</SPAN> complexes like <NOBR>Bi(C<SUB>6</SUB>H<SUB>5</SUB>)<SUB class=align>6</SUB><SUP>−</SUP></NOBR> have only approximate T<SUB>h</SUB> symmetry in the crystal (with bulky <SPAN class=mhyp>counter&shy;ions</SPAN>). The fullerene C<SUB>60</SUB>Br<SUB>24</SUB> is an example of T<SUB>h</SUB> generated from <A href=Ih.html>I<SUB>h</SUB></A> by a specific substitution pattern."
       if (dbg || group.grpname=="Td") ol.innerHTML += "<P class=plaina>Molecules with T<SUB>d</SUB> symmetry are quite common. Examples include sulfate, ammonium, white phosphorus P<SUB>4</SUB>, <SPAN class=mhyp>osmium tetr&shy;oxide</SPAN> OsO<SUB>4</SUB>, methyl lithium Li<SUB>4</SUB>(CH<SUB>3</SUB>)<SUB>4</SUB> (solid tetra&shy;mer), silicon <SPAN class=mhyp>tetra&shy;chloride</SPAN>, <SPAN class=mhyp>tetra&shy;boron tetra&shy;chloride</SPAN>, B<SUB>4</SUB>Cl<SUB>4</SUB>, methane, <SPAN class=mhyp>neo&shy;pentane</SPAN>, tetrahedrane C<SUB>4</SUB>H<SUB>4</SUB>, adamantane C<SUB>10</SUB>H<SUB>16</SUB>, <SPAN class=mhyp>uro&shy;tropine</SPAN> (<SPAN class=mhyp>hexa&shy;methylene&shy;tetramine</SPAN>) C<SUB>6</SUB>H<SUB>12</SUB>N<SUB>4</SUB>, “<SPAN class=mhyp>phos&shy;phorus pent&shy;oxide</SPAN>” P<SUB>4</SUB>O<SUB>10</SUB>, nickel <SPAN class=mhyp>tetra&shy;carbonyl</SPAN> Ni(CO)<SUB>4</SUB>, <SPAN class=mhyp>tetra&shy;iridium dodeca&shy;carbonyl</SPAN> Ir<SUB>4</SUB>(CO)<SUB>12</SUB>, the C<SUB>28</SUB> fullerene and a large number of <SPAN class=mhyp>tetra&shy;hedrally</SPAN> coordinated <SPAN class=mhyp>trans&shy;ition</SPAN> metal complexes, <NOBR class=eg>e.&thinsp;g.</NOBR> [CoCl<SUB>4</SUB>]<SUP>2−</SUP>."
       if (dbg || group.grpname=="O") ol.innerHTML += "<P class=plaina>Molecules with O symmetry are exceedingly rare. It can arise from bridging the edges of a cube with a twisted group, <NOBR class=eg>e.&thinsp;g.</NOBR> <SPAN class=mhyp>dodeca-ethylene-oct&shy;amine</SPAN>, N<SUB>8</SUB>(C<SUB>2</SUB>H<SUB>4</SUB>)<SUB>12</SUB>. The iron transport protein ferritin self-assembles into a <SPAN class=mhyp>tetraicosa&shy;mer</SPAN> with (approximate) O symmetry."
       if (dbg || group.grpname=="Oh") ol.innerHTML += "<P class=plaina>O<SUB>h</SUB> symmetry is common in inorganic chemistry, appearing in SF<SUB>6</SUB>, W(CO)<SUB>6</SUB>, <NOBR>PbCl<SUB class=align>6</SUB><SUP>2−</SUP></NOBR>, <NOBR>B<SUB>6</SUB>H<SUB class=align>6</SUB><SUP>2−</SUP></NOBR> and innumerable <SPAN class=mhyp>trans&shy;ition</SPAN> metal coordination compounds like [CrCl<SUB>6</SUB>]<SUP>3−</SUP> or [Fe(CN)<SUB>6</SUB>]<SUP>4−</SUP>; note, however, that these are susceptible to Jahn–Teller distortions except in d<SUP>3</SUP>, d<SUP>5</SUP> high-spin and d<SUP>6</SUP> low-spin con&shy;figura&shy;tions. In contrast to these <SPAN class=mhyp>octa&shy;hedral</SPAN> examples, real cube-shaped molecules are rare, <NOBR class=eg>e.&thinsp;g.</NOBR>, the hydrocarbon cubane (C<SUB>8</SUB>H<SUB>8</SUB>) and the <SPAN class=mhyp>sil&shy;sesqui&shy;oxane</SPAN> cage Si<SUB>8</SUB>O<SUB>12</SUB>(CH<SUB>3</SUB>)<SUB>8</SUB>."
       if (dbg || group.grpname=="I") ol.innerHTML += "<P class=plaina>Molecules with I symmetry are exceedingly rare; the smallest available example seems to be the C<SUB>140</SUB> fullerene, and there are theoretical results on an fullerene-like gold cluster Au<SUB>72</SUB>. However, many virus particles (virions) self-assemble in this symmetry (approximatively). "
       if (dbg || group.grpname=="Ih") ol.innerHTML += "<P class=plaina>Molecules with I<SUB>h</SUB> symmetry are rare. Examples include <SPAN class=mhyp>dodeca&shy;hedrane</SPAN> C<SUB>20</SUB>H<SUB>20</SUB> and the icosahedral anions <NOBR>B<SUB>12</SUB>H<SUB class=align>12</SUB><SUP >2−</SUP></NOBR> and <NOBR>Pb<SUB class=align>12</SUB><SUP>2−</SUP></NOBR>. The most prominent example, however, is the <SPAN class=mhyp>buckminster&shy;fullerene</SPAN> C<SUB>60</SUB>; there are also other fullerene structures with this symmetry, ranging from C<SUB>20</SUB> (“<SPAN class=mhyp>dehydro-dodeca&shy;hedrane</SPAN>”) to C<SUB>540</SUB>."

 

       if (dbg) ol.innerHTML=ol.innerHTML.replace(/(Molecules with) ([TOICDS](<sub>[0-9]*[shvdi]?<\/sub>)?)/g,"$1 <B style='xcolor:red'>$2</B>")
       //if (ol.innerHTML) el.parentNode.insertBefore(ol,el)
       if (ol.innerHTML) {el.parentNode.appendChild(ol); molex=true}
       if (dbg) ol.parentNode.className="showmhyp" 
       if (dbg) ol.parentNode.innerHTML=ol.parentNode.innerHTML.replace(/­/g,"·­")


       var x1=parseInt(group.grpname.match(/[0-9]+/))
       ol=document.createElement("TABLE")
       //ol.border=1
       ol.id="glance"
       //ol.border=1
       var tdflag=true
       var str="<THEAD><TR><TD class=space><TH colspan=5>"+group.grpname.replace(/C1h/,"Cs").replace(/S2$/,"Ci").replace(/([CDSOIT])([0-9]*[vdhis]?)/,"$1<SUB>$2</SUB>")+" at a glance</TH><TD class=space></TR></THEAD><TFOOT><TR class=space><TD><TD><TD><TD colspan=3 id=glance_td2><TD></TFOOT><TBODY><TR class=space><TD><TD><TD><TD colspan=2 ><TD class=glance_td1a><TD>"
       str+= "<TR class=data><TD class=blank><TH scope=row colspan=2>Group order <I>h</I>: <TD>"+group.grporder + "<TD class='glance_td1 blank'><TD class='glance_td1a blank'><TD class=blank>"
       str+= "<TR class=data><TD class=blank><TH scope=row colspan=2>Number of Irreps:<TD>"+group.nclass + "<TD colspan=2 class=blank><TD class=blank>"
       str+="<TR class=data><TD class=blank><TH scope=row colspan=2><SPAN"+(group.grpname.match(/[CD][0-9]*[13579][hd]/)||group.grpname.charAt(0)=="S"&&is_odd(x1/2)?" title='Character tables by convention use redundant generators for this group'":"")+">Generators</SPAN>: <TD>"+(group.grpname.match(/[CS][0-9]+$|C[0-9]*[13579]h|C1v|D1$/)?1:(group.grpname.match(/D[0-9]*[02468]h/)?3:2)) + "<TD colspan=2 class=blank><TD class=blank>"
       str+= "<TR class=data><TD class=blank><TH scope=row colspan=2>SOP max. order: <TD>"
       if (group.grpname.match(/Ih/)) str+="10"
        else if (group.grpname.match(/I/)) str+="5"
        else if (group.grpname.match(/O|Td/)) str+="6"
        else if (group.grpname.match(/Th/)) str+="4"
        else if (group.grpname.match(/T/)) str+="3"
        else str+=parseInt(group.grpname.match(/[0-9]+/))* (group.grpname.match(/[CD][0-9]*[13579][hd]|D[0-9]+d/)?2:1)
       str+="<TD colspan=2 class=blank><TD class=blank>"
       str+= "<TR class=data><TD class=blank><TH scope=row colspan=2><SPAN id=sgrouptitle>Subgroups</SPAN>:"
       if (group.grpname.match(/D1h/)) str+="<TD id=glance_sgroup class=glance_td2 colspan=3>3, unique 2"
        else if (group.grpname.match(/D1d/)) str+="<TD id=glance_sgroup>3<TD colspan=2 class=blank>"
        else if (group.grpname.match(/O$/)) str+="<TD id=glance_sgroup class=glance_td2 colspan=3>9, unique 7<TD id=foo class=blank >"
        else if (group.grpname.match(/Oh/)) str+="<TD id=glance_sgroup class=glance_td2 colspan=3>31, unique 23<TD id=foo class=blank >"
        else if (group.grpname.match(/D1$|C2$|C3$|S2$/)) str+="<TD id=glance_sgroup>None<TD colspan=2 class=blank>"
        else str+="<TD id=glance_sgroup>Wait<TD colspan=2 class=blank>"
       str+="<TD class=blank>"
       if (!group.grpname.match(/C1v|D1[hd]?$/)) 
          {
             var niso=isom && (isom.match(/href/g).length)
             if (!isom) str+='<TR class=data><TD class=blank><TH scope=row colspan=2><SPAN>Isomorphisms</SPAN>:<TD colspan=2>None<TD colspan=1 class=blank><TD class=blank>'
              else if (niso==1) str+='<TR class=data><TD class=blank><TH scope=row colspan=2><SPAN title="Group with identical multiplication table">Isomorphism</SPAN>:<TD>'+isom+'<TD colspan=2 class=blank><TD class=blank>'
              else if (niso==2) str+='<TR class=data><TD class=blank><TH scope=row colspan=2><SPAN title="Group with identical multiplication table">Isomorphism</SPAN>:<TD class=glance_td3 colspan=2>'+isom+'<TD colspan=1 class=blank><TD class=blank>'
              else str+='<TR class=data><TD class=blank><TH scope=row colspan=2><SPAN title="Groups with identical multiplication table">Isomorphisms</SPAN>:<TD class=glance_td2 colspan=3>'+isom+'<TD class=blank>'
          }
       str+= "<TR class=data><TD class=blank><TH scope=row colspan=2><SPAN title='Absence of an Sₙ axis triggers chirality'>Chiral</SPAN>?<TD>"+ (group.grpname.match(/[CD][0-9]+$|[IOT]$/)?"Yes":"No") + "<TD colspan=2 class=blank><TD class=blank>"
       str+= "<TR class=data><TD class=blank><TH scope=row colspan=2><SPAN title='means that more than one points stays unmoved under all SOPs'>Polar</SPAN>?<TD >"+ (group.grpname.match(/C[0-9]+v?$|C1h|D1h?$/)?"Yes":"No") + "<TD colspan=2 class=blank><TD class=blank>"
       str+= "<TR class=data><TD class=blank><TH scope=row colspan=2><SPAN title='means presence of an inversion center'>Parity</SPAN>?<TD id=glance_col>"+ (group.grpname.match(/[CD][0-9]*[02468]h|D[0-9]*[13579][d]|[OTI]h/)?"Yes":"No") + "<TD colspan=2 class=blank><TD class=blank>"
       str+= "<TR class=data><TD class=blank><TH scope=row colspan=2><SPAN title='Commutativity is precluded by non-coaxial symmetry elements AND an axis of order &gt;2'>Abelian?</SPAN><TD>"+ (group.grpname.match(/[SCD][12][vhd]?$|C[0-9]+h|[CS][0-9]+$/)&&!group.grpname.match(/D2d/)?"Yes":"No") + "<TD colspan=2 class=blank><TD class=blank>"
       str+= "<TR class=data><TD class=blank><TH scope=row colspan=2><SPAN title='Degeneracy occurs if any symmetry axis has order&gt;2 AND the group is non-Abelian'>Degenerate</SPAN>?"
       if (group.grpname.match(/[SCD][12][vhd]?$/)&&!group.grpname.match(/D2d/)) str+="<TD>No<TD colspan=2 class=blank><TD class=blank>"
          else if (group.grpname.match(/C[0-9]+h|[CS][0-9]+$|Th?$/)) str+="<TD class=glance_td2 colspan=3>Yes (<SPAN id=complextitle>"+(group.grpname.match(/Th*$/)?"partly ":"")+"pseudo</SPAN>)<TD class=blank>"
          else str+="<TD>Yes<TD colspan=2 class=blank><TD class=blank>"
       str+= "<TR class=data><TD class=blank><TH scope=row colspan=2><SPAN title='means presence of several symmetry axes with order &gt;2'>Isometric</SPAN>?"+ (group.grpname.match(/T/)?"<TD class=glance_td2 colspan=3>Yes (<SPAN title='Neither C₄ nor C₅ axes present'>tetrahedral</SPAN>)":(group.grpname.match(/O/)?"<TD class=glance_td2 colspan=3>Yes (<SPAN title='C₄ axes present'>octahedral</SPAN>)":(group.grpname.match(/I/)?"<TD class=glance_td2 colspan=3>Yes (<SPAN title='C₅ axes present'>icosahedral</SPAN>)":"<TD>No<TD colspan=2 class=blank>"))) + "<TD class=blank>"
       str+= "<TR class=data><TD class=blank><TH scope=row colspan=2><SPAN title='means that the symmetry can occur in three-dimensional periodic systems'>3D Crystallographic</SPAN>?"+ (group.cryst?"<TD>Yes<TD colspan=2 class=blank>":"<TD class=glance_td2 colspan=3>No")
       
       var x1=parseInt(group.grpname.match(/[0-9]+/))
       var x2=(group.grpname.match(/I/)?10:x1 * (group.grpname.match(/D[0-9]+d/)?2:1))
       var n=+([0,0,0,2,2,4,2,6,4,6,4,10,4,12,6,6,8,16,6,18,6,8,10,22,6,20,12,18,8,28,6,30,16,12,16,10,8,36,18,14,8,40,8,42,12,10,22,46,10,42,20,18,14,52,18,14,10,20,28,58,8,60,30,12,32,16,12,66,18,24,10,70,10,72,36,22,20,16,14,78,12,54,40,82,10,20,42,30,14,88,10,18,24,32,46,22,18,96,42,16,22,100,18,102,16,12,52,106,20,108,14,38,14,112,20,26,30,18,58,22,10,110,60,42,32,100,12,126,64,44,16,130,14,24,66,22,20,136,24,138,12,48,70,22,14,32,72,44,38,148,22,150,22,22,16,34,16,156,78,54,20,28,54,162,42,16,82,166,12,156,20,24,44,172,30,26,18,60,88,178,12,180,18,62,26,40,32,26,48,24,22,190,34,192,96,18,44,196,16,198,24,68,100,34,20,44,102,28,20,28,12,210,54,72,106,46,22,36,108,74,16,28,38,222,22,26,112,226,22,228,26,18,32,232,18,50,60,80,22,238,14,240,110,162,62,46,42,30,34,84,100,250,14,32,126,22,128,256,44,42,18,34,130,262,16,56,24,90,68,268,22,270,24,20,136,30,26,276,138,36,14,280,48,282,72,24,22,46,22,272,32,98,74,292,44,62,40,28,148,34,24,48,150,102,26,64,22,306,18,104,34,310,18,312,156,16,80,316,54,38,36,108,28,34,56,32,162,110,44,52,16,330,84,42,166,70,16,336,156,114,22,40,24,294,46,28,172,346,32,348,26,30,26,352,60,74,90,24,178,358,14,342,180,112,20,76,62,366,30,46,40,58,34,372,26,102,50,40,24,378,24,128,190,382,66,20,192,48,98,388,18,38,46,132,196,82,18,396,198,26,28,400,68,42,102,58,34,46,22,408,44,138,104,64,28,86,28,140,28,418,14,420,210,52,56,36,72,66,108,24,46,430,26,432,36,34,110,40,74,438,18,48,28,442,40,92,222,150,38,448,26,50,114,152,226,22,24,456,228,34,28,460,18,462,36,36,232,466,20,72,50,158,62,52,80,38,24,58,238,478,22,48,240,30,112,100,162,486,64,164,46,490,44,44,30,20,38,76,84,498,102,168,250,502,16,104,32,158,128,508,22,78,256,36,256,106,46,56,42,174,20,520,34,522,132,28,262,46,20,506,56,64,26,52,90,110,70,180,268,52,24,540,270,182,32,112,20,546,138,66,30,46,28,84,276,42,140,556,36,54,18,28,280,562,50,116,282,60,74,568,24,570,24,192,46,42,38,576,272,194,34,88,98,62,76,22,292,586,46,48,62,198,44,592,28,26,150,200,34,598,26,600,48,72,152,114,102,606,34,36,64,58,24,612,306,46,20,616,104,618,36,40,310,94,22,500,312,30,158,52,16,630,82,212,316,130,56,54,38,76,68,640,108,642,30,48,34,646,58,68,32,38,164,652,110,134,48,78,52,658,18,660,330,30,86,28,42,50,168,224,70,70,24,672,336,38,158,676,114,102,24,228,40,682,26,140,294,230,50,64,28,690,174,22,346,142,34,56,348,234,28,700,30,54,42,52,352,106,62,708,74,84,92,52,24,26,180,240,358,718,18,108,342,242,182,48,112,726,22,486,76,58,64,732,366,48,38,76,46,738,42,32,58,742,36,152,372,88,28,112,102,750,54,252,40,154,26,756,378,34,26,760,128,114,192,26,382,70,130,768,20,258,194,772,48,50,100,44,388,58,20,80,38,46,50,160,132,786,198,264,82,118,20,72,396,58,200,796,26,62,36,94,400,82,70,32,42,270,104,808,58,810,36,272,46,166,26,60,408,24,46,820,138,822,106,32,64,826,30,828,86,278,44,58,140,170,30,48,418,838,16,812,420,282,212,160,52,116,60,284,36,58,74,852,66,28,110,856,24,858,48,48,430,862,34,176,432,274,38,88,34,78,112,102,40,106,76,876,438,294,22,880,48,882,30,64,442,886,42,132,92,64,224,64,150,182,70,36,448,58,28,68,50,50,116,184,152,906,228,106,22,910,28,92,456,66,230,136,34,918,30,308,460,82,20,56,462,108,44,928,36,60,234,312,466,30,22,936,72,314,52,940,158,62,66,28,52,946,82,84,38,318,26,952,58,194,240,40,478,142,38,930,48,112,242,196,30,966,114,36,100,970,164,144,486,34,68,976,164,98,48,114,490,982,46,200,44,54,32,64,20,990,46,332,76,202,86,996,498,54,104,28]
[x2])
       if (group.grpname.charAt(0)=='I') n=5
       if (!group.cryst) str+=", <SPAN"+(n<7?" id=crysttitle>":">")+"needs "+n+"D</SPAN>"
       str+="<TD class=blank>"
       if (!group.grpname.match(/C1v|D1[hd]?$/)) str+= "<TR class=data><TD class=blank><TH scope=row colspan=2>Molecular examples?"+ (molex?"<TD>Yes<TD colspan=2 class=blank>":"<TD colspan=2 class=glance_td2>Unknown<TD class=blank>")+ "<TD class=blank>"

       str+="</TBODY><TBODY><TR class=data><TD class=blank><TH scope=rowgroup >Orientation:<TD class=ori><I>x</I>" + ("<TD>" + (group.grpname.match (/^[TI]/) ? "C<SUB>2</SUB>" + (group.grpname.match(/Td/) ? " ⋕ S<SUB>4</SUB>" : "") : (group.grpname.match (/O/) ? "C<SUB>4</SUB>" : (group.grpname.match (/^[D]/) ? "C<SUB class=minisop>2</SUB><SUP class=minisop>′</SUP>" : "&thinsp;—")))+ "<TD colspan=2 class=blank>").replace (/<TD>(.*⋕)/, "<TD class=glance_td3 colspan=2>$1").replace (/(⋕.*)<TD colspan=2 class=blank>/,"$1<TD class=blank>") + "<TD class=blank>"
       if (group.grpname.match (/^D[0-9]*d/)) str+="<TR class=data><TD class=blank colspan=2><TD class=ori><I>y</I><TD>" + (is_even(x1) ? "C<SUB class=minisop>2</SUB><SUP class=minisop>&prime;</SUP>" : "&thinsp;—")+ "<TD colspan=2 class=blank><TD class=blank>"
         else str+="<TR class=data><TD class=blank colspan=2><TD class=ori><I>y</I>" + ("<TD>" + (group.grpname.match (/^[TI]/) ? "C<SUB>2</SUB>" + (group.grpname.match(/Td/) ? " ⋕ S<SUB>4</SUB>" : "") : (group.grpname.match (/O/) ? "C<SUB>4</SUB>" : (group.grpname.match (/^D[0-9]*[24680][hd]?$/) ? (is_even(x1/2)? "C<SUB class=minisop>2</SUB><SUP class=minisop>′</SUP>" : "C<SUB class=minisop>2</SUB><SUP class=minisop>″</SUP>") : "&thinsp;—")))+ "<TD colspan=2 class=blank>").replace (/<TD>(.*⋕)/, "<TD class=glance_td3 colspan=2>$1").replace (/(⋕.*)<TD colspan=2 class=blank>/,"$1<TD class=blank>") + "<TD class=blank>"
       str+="<TR class=data><TD class=blank colspan=2><TD class=ori><I>z</I>" + ("<TD>" + (group.grpname.match(/[CD]1[hvd]?$/) ? "&thinsp;—" : (group.grpname.match (/^[TI]/) ? "C<SUB>2</SUB>"  + (group.grpname.match(/Td/) ? " ⋕ S<SUB>4</SUB>" : ""): (group.grpname.match (/O/) ? "C<SUB>4</SUB>" : (group.grpname.match(/D[0-9]+d/) ? "C<SUB>"+x1+"</SUB> ⋕ S<SUB>"+2*x1+"</SUB>" : (group.grpname.match (/S[0-9]+/) || group.sop0[1]).toString().replace(/S2$/,"&thinsp;—").replace (/([CS])([0-9]+)/,"$1<SUB>$2</SUB>")))))+ "<TD colspan=2 class=blank>").replace (/<TD>(.*⋕)/, "<TD class=glance_td3 colspan=2>$1").replace (/(⋕.*)<TD colspan=2 class=blank>/,"$1<TD class=blank>") + "<TD class=blank>"
       if (group.grpname.match (/D[0-9]+h?$/) && is_integer(x1/4)) str += '<TR class=data><TD class=blank colspan=2><TD class=ori><I>x</I>+<I>y</I><TD>C<SUB class=minisop>2</SUB><SUP class=minisop>'+(is_even(x1/4)?"&prime;":"&Prime;")+'</SUP>'+ "<TD colspan=2 class=blank><TD class=blank>"
         else if (group.grpname.match (/D[0-9]+d$/) && is_even(x1/2)) str += '<TR class=data><TD class=blank colspan=2><TD class=ori><I>x</I>+<I>y</I><TD>C<SUB class=minisop>2</SUB><SUP class=minisop>&prime;</SUP>'+ "<TD colspan=2 class=blank><TD class=blank>"
         else if (group.grpname.match (/O/)) str += '<TR class=data><TD class=blank colspan=2><TD class=ori><I>x</I>+<I>y</I><TD>C<SUB class=minisop>2</SUB><SUP class=minisop>&prime;</SUP>'+ "<TD colspan=2 class=blank><TD class=blank>"
       if (group.grpname.match (/[TOI]/)) str += '<TR class=data><TD class=blank colspan=2><TD class=ori><I>x</I>+<I>y</I>+<I>z</I>' + ('<TD>C<SUB>3</SUB>' + (group.grpname.match(/h$/) ? " ⋕ S<SUB>6</SUB>" : "")+ "<TD colspan=2 class=blank>").replace (/<TD>(.*⋕)/, "<TD class=glance_td3 colspan=2>$1").replace (/(⋕.*)<TD colspan=2 class=blank>/,"$1<TD class=blank>") + "<TD class=blank>"

       str+="<TR class=data><TD class=blank colspan=2><TD class=ori><I>xy</I><TD>" + (group.grpname.match (/^[TOCD][0-9]*h/) ? "&sigma;<SUB>h</SUB>" : (group.grpname.match (/^Ih/) ? "&sigma;" : "&thinsp;—"))+ "<TD colspan=2 class=blank><TD class=blank>"
       str+="<TR class=data><TD class=blank colspan=2><TD class=ori><I>xz</I><TD>" + (group.grpname.match(/C[0-9]+v|D[0-9]+h/) ? "&sigma;<SUB>v</SUB>" : (group.grpname.match (/^[TO]h/) ? "&sigma;<SUB>h</SUB>" : (group.grpname.match (/^Ih/) ? "&sigma;" : "&thinsp;—")))+ "<TD colspan=2 class=blank><TD class=blank>"
       if (group.grpname.match (/^D[0-9]*d/)) str+="<TR class=data><TD class=blank colspan=2><TD class=ori><I>yz</I><TD>" + (is_odd(x1) ? "&sigma;<SUB>d</SUB>" : "&thinsp;—")+ "<TD colspan=2 class=blank><TD class=blank>"
         else str+="<TR class=data><TD class=blank colspan=2><TD class=ori><I>yz</I><TD>" + (group.grpname.match(/C[0-9]*[02468]+v|D[0-9]*[02468]h/) ? (is_even(x1/2) ? "&sigma;<SUB>v</SUB>" : "&sigma;<SUB>d</SUB>") : (group.grpname.match (/^[TO]h/) ? "&sigma;<SUB>h</SUB>" : (group.grpname.match (/^Ih/) ? "&sigma;" : (group.grpname.match(/D[0-9]*[13579]d/) ? "&sigma;<SUB>d</SUB>" : "&thinsp;—"))))+ "<TD colspan=2 class=blank><TD class=blank>"
       if (group.grpname.match (/D[0-9]*[02468]h$|C[0-9]*[02468]v$/) && is_integer(x1/4)) str += '<TR class=data><TD class=blank colspan=2><TD class=ori>(<I>x</I>+<I>y</I>)<I>z</I><TD>&sigma;<SUB>'+(is_even(x1/4)?"v":"d")+'</SUB>'+ "<TD colspan=2 class=blank><TD class=blank>"
       if (group.grpname.match (/D[0-9]*[02468]d$/) && !is_integer(x1/4)) str += '<TR class=data><TD class=blank colspan=2><TD class=ori>(<I>x</I>+<I>y</I>)<I>z</I><TD>&sigma;<SUB>d</SUB>'+ "<TD colspan=2 class=blank><TD class=blank>"
       if (group.grpname.match (/Oh|Td/)) str += '<TR class=data><TD class=blank colspan=2><TD class=ori>(<I>x</I>+<I>y</I>)<I>z</I><TD>&sigma;<SUB>d</SUB>'+ "<TD colspan=2 class=blank><TD class=blank>"
       str+='</TBODY>'
       str=str.replace(/⋕/g,"<SPAN title='coincides with'>⋕</SPAN>")
       ol.innerHTML=str
       el=document.getElementById("noteslist")
       el.insertBefore(ol,el.firstChild)

   }
      
function make_rottrans()
   {
      str=document.getElementsByTagName("PRE")[0].innerHTML // .substr(str.indexOf("Notes"),str.length)
      chartab=str.substring(0,str.indexOf("Symmetry of Rotations")).replace(/(\r\n|\n|\r)/gm, "@")
      text= (str.substr(str.indexOf("Symmetry of Rotations"),str.length)).replace(/(\r\n|\n|\r)/gm, "@")
      str = str.substr(0,str.indexOf("Symmetry of Rotations"))
      document.getElementsByTagName("PRE")[0].innerHTML=str


      hr=document.getElementsByTagName ("HR")[0]
      e=document.createElement("HR")
      hr.parentNode.insertBefore(e,hr)
      e=document.createElement("DIV")
      e.id="rottransdiv"
      if (group.orig[0].charAt(group.orig[0].length-1) != "'") e.className="noprime"
      strnew="<H2 class=stickleft id=h_cartesian>Symmetry of Rotations and Cartesian products</H2><TABLE id=rottrans>"
      strnew+="<THEAD><TR><TD></TD><TD></TD><TD class=symmetrybox id=symmhead></TD></TR></THEAD>"
      strnew+="<TFOOT><TR><TD></TD><TD></TD><TD class=symmetrybox id=symmfoot></TD></TR></TFOOT><TBODY>"
      line=split_line(text,2)
      j=0
      line1=''
      cubic=false
      for (i=3;line!="";i++)
          {
             irrep=line.substring(0,line.indexOf('/span>')+6)
             line='<TR><TH scope=row>' + line.replace(/>  */, "> <TD> ").replace(/   */, " <TD>BOXES ").replace (/<SPAN class=["']?obs["']?>\+/i, "<BR><SPAN class=obs>")
             line=line.replace (/BOXES(.*)/, "BOXES <DIV class=prodwrap>$1</DIV>")
             line=line.replace(/class=["']?prod["']? title=(["']?)([a-z])/g, 'class="$2 prod" title=$1$2').replace( /[xyz] prod/g, "R prod")  // put l into class of product spans (noncubic)
             if (!/<TH.*<TD.*<TD/.test(line))  line += '<TD>BOXES'
             for (;line1.indexOf(irrep)==-1;j++) {line1=split_line(chartab,j); } // get boxes from above
             boxes=line1.match (/(<[^<>]*>|\.| |[tT])*$/) // extract boxes 
             boxes=boxes[0]
             if ((false||boxes.indexOf("T")>-1) && boxes.indexOf("<span")==-1) 
                 {  // cubic, ico
                    boxes=boxes.replace (/\./g, "<DIV class=zero></DIV>").replace (/TTTTTT/g,'<DIV class="XXX"></DIV><DIV class="XXX"></DIV>').replace (/TTTTT/g, '<DIV class="XXXXX"></DIV>').replace (/TTTT/g, '<DIV class="XXXX"></DIV>').replace (/TTT/g, '<DIV class="XXX"></DIV>').replace (/TT/g, '<DIV class="XX"></DIV>').replace (/T/g, '<DIV class="X"></DIV>').replace (/X/g,"T").replace (/> </g, "><DIV class=sep></DIV><").replace(/"T/g, '"q T')
                    boxes=boxes.replace(/(<DIV class="q T">.*)<DIV class="q TT">/, '$1<DIV class="q T"></DIV><DIV class="q T">') // correction for t,th
                    //alert(boxes)
                    cubic=true
                    boxes=boxes.replace (/^(.*<DIV class=sep.*<DIV class=sep.*<DIV class=sep.*<DIV class=sep.*<DIV class=sep.*<DIV class=sep.*class=")q/g, "$1i q")
                               .replace (/^(.*<DIV class=sep.*<DIV class=sep.*<DIV class=sep.*<DIV class=sep.*<DIV class=sep.*<DIV class=sep.*class=")q/g, "$1i q")
                               .replace (/^(.*<DIV class=sep.*<DIV class=sep.*<DIV class=sep.*<DIV class=sep.*<DIV class=sep.*<DIV class=sep.*class=")q/g, "$1i q")
                               .replace (/^(.*<DIV class=sep.*<DIV class=sep.*<DIV class=sep.*<DIV class=sep.*<DIV class=sep.*class=")q/g, "$1h q")
                               .replace (/^(.*<DIV class=sep.*<DIV class=sep.*<DIV class=sep.*<DIV class=sep.*<DIV class=sep.*class=")q/g, "$1h q")
                               .replace (/^(.*<DIV class=sep.*<DIV class=sep.*<DIV class=sep.*<DIV class=sep.*<DIV class=sep.*class=")q/g, "$1h q")
                               .replace (/^(.*<DIV class=sep.*<DIV class=sep.*<DIV class=sep.*<DIV class=sep.*class=")q/g, "$1g q")
                               .replace (/^(.*<DIV class=sep.*<DIV class=sep.*<DIV class=sep.*<DIV class=sep.*class=")q/g, "$1g q")
                               .replace (/^(.*<DIV class=sep.*<DIV class=sep.*<DIV class=sep.*class=")q/g, "$1f q")
                               .replace (/^(.*<DIV class=sep.*<DIV class=sep.*<DIV class=sep.*class=")q/g, "$1f q")
                               .replace (/^(.*<DIV class=sep.*<DIV class=sep.*class=")q/g, "$1d q")
                               .replace (/^(.*<DIV class=sep.*<DIV class=sep.*class=")q/g, "$1d q")
                               .replace (/^(.*<DIV class=sep.*class=")q/g, "$1p q")
                               .replace (/^(.*class=")q/g, "$1R q")

                 }
             else  
                 {  // noncubic
                    boxes=boxes.replace (/\./g, "<DIV class=zero></DIV>").replace (/<\/span>/g, "</DIV>").replace(/<span[^<>]*title="(.)([^"]*)"[^<>]*>/g, "<DIV title='$1$2' class=$1>").replace( /(.)>(TT*)/g, "'$1 $2'>").replace (/> </g, "><DIV class=sep></DIV><").replace (/T'/g, "T q'") // general structure
                 }
             boxes=boxes.replace(/(<DIV class=sep><\/DIV>)/g,'</DIV>$1<DIV class="wwww">').replace(/(^ *)/,"$1<DIV class='lcontainer R'>").replace(/wwww/,"lcontainer p").replace(/wwww/,"lcontainer d").replace(/wwww/,"lcontainer f").replace(/wwww/,"lcontainer g").replace(/wwww/,"lcontainer h").replace(/wwww/,"lcontainer i") + "</DIV>"
             line=line.replace (/BOXES/, "<DIV class=bx>"+boxes+"</DIV>")
             line=line.replace (/<TH/,'<TH onMouseOut="unhighlight_rottrans_line(this)" onClick="toggle_rottrans_line(this)"')
             //alert (line)
             strnew += " "+line 
             line=split_line(text,i)
          }

      strnew += "</TABLE>"

      strnew += '<DIV class=stickleft id=bx_control><FORM onSubmit="return false"> <LABEL><INPUT type=checkbox checked id=rottrans_show_bx onChange="rottrans_refine(this)"> Show lines of boxes </LABEL>'
      strnew += '<P class=labelp><LABEL><INPUT type=checkbox checked id=rottrans_show_cart onChange="rottrans_refine(this)"> Show terms for Cartesian products</LABEL>'
      strnew += '<P class=labelp><LABEL><INPUT type=checkbox checked id=rottrans_show_spher onChange="rottrans_refine(this)"> Show terms for angular momenta</LABEL>'
      strnew += '<P class=labelp><LABEL><INPUT type=checkbox id=rottrans_show_empty onChange="rottrans_refine(this)"> Suppress empty box rows</LABEL>'
      el=document.getElementById("noteslist")
      //try {strnew+='<P class=stickleft class=labelp>Set font size in table to <INPUT type=number style="width:4em" step="any" pattern="[0-9]*\.[0-9]" id="set_font_size_rottrans" class=setfontsize onChange="set_font_size(this)" value="'+parseInt(window.getComputedStyle(el, "").getPropertyValue("font-size"))+'" defval="'+parseInt(window.getComputedStyle(el, "").getPropertyValue("font-size"))+'"> px'} catch (foo) {}  // better not, does not really work anyway
      strnew += '</FORM></DIV>'
      e.innerHTML=strnew
      hr.parentNode.insertBefore(e,hr)

      el=e.getElementsByTagName("TBODY")[0].getElementsByClassName("bx")
      flag=true
      for (i=0;i<el.length;i++) {if (el[i].getElementsByClassName("q").length==0) flag=false}
      document.getElementById("rottrans_show_empty").parentNode.style.display=(flag)?"none":""
      if (e.getElementsByTagName("TBODY")[0].getElementsByClassName("prod").length==0) 
          {
            document.getElementById("rottrans_show_cart").checked=false
            document.getElementById("rottrans_show_cart").parentNode.style.display="none"
          }

      if (cubic)
         {
             tr= (e.getElementsByTagName("TBODY")[0].getElementsByTagName("TR"))
             if (group.grpname.charAt(0) == 'I') e.getElementsByTagName("TBODY")[0].className="ico"
             for (i=0; i<tr.length;i++)
                 {
                    bx=tr[i].getElementsByClassName("bx")[0].getElementsByClassName("q")
                    span=tr[i].getElementsByClassName("prodwrap")[0]
                    if (span) span=span.firstChild
                    for (j=0; j<bx.length; j++)
                        {
                            if (!span) break
                            if (span.nodeName.toLowerCase() != "span") span=span.nextSibling
                            if (!span) break
                            if (span.nodeName.toLowerCase() != "span") span=span.nextSibling
                            if (!span) break
                            //alert (span +" "+span.innerHTML+"   "+bx[j].className.charAt(0))
                            span.className = bx[j].className.charAt(0).replace(/x/,"x i") + " "+ span.className
                            //span.title=bx[j].className.charAt(0)
                            //alert ("row="+i+" elem="+j+" class="+bx[j].className.charAt(0)+" span="+span.innerHTML+ "   "+span.className)
                            span=span.nextSibling
                        }
                 }
         }

      el=hr.parentNode.getElementsByClassName("q")
      for (i=0; i<el.length;i++)
          {
             el[i].onmouseout=unhighlight_term
             el[i].onmouseover=highlight_term
             el[i].onclick=highlight_click_term
          }

      el=hr.parentNode.getElementsByClassName("prod")
      for (i=0; i<el.length;i++)
          {
             e=el[i]
             if (e.parentNode.className.indexOf( "deg") > -1) e=e.parentNode
             e.onmouseout=unhighlight_box
             e.onmouseover=highlight_box
          }
  

     str='<DIV class=bx><DIV onMouseOver="highlight_l(this, true, false)" onMouseOut="highlight_l(this, false, false)" onClick="highlight_l(this, false, true)" class="R w3w"><SPAN>Rot</SPAN></DIV><DIV class=sep></DIV><DIV onMouseOver="highlight_l(this, true, false)" onMouseOut="highlight_l(this, false, false)" onClick="highlight_l(this, false, true)" class="p w3w"><SPAN>Tr=p</SPAN></DIV><DIV class=sep></DIV><DIV onMouseOver="highlight_l(this, true, false)" onMouseOut="highlight_l(this, false, false)" onClick="highlight_l(this, false, true)" class="d w5w"><SPAN>―&thinsp;d&thinsp;―</SPAN></DIV><DIV class=sep></DIV><DIV onMouseOver="highlight_l(this, true, false)" onMouseOut="highlight_l(this, false, false)" onClick="highlight_l(this, false, true)" class="f w7w"><SPAN>―― f ――</SPAN></DIV><DIV class=sep></DIV><DIV onMouseOver="highlight_l(this, true, false)" onMouseOut="highlight_l(this, false, false)" onClick="highlight_l(this, false, true)" class="g w9w"><SPAN>―― g ――</SPAN></DIV><DIV class=sep></DIV><DIV onMouseOver="highlight_l(this, true, false)" onMouseOut="highlight_l(this, false, false)" onClick="highlight_l(this, false, true)" class="h w11w"><SPAN>――― h ―――</SPAN></DIV><DIV class=sep></DIV><DIV onMouseOver="highlight_l(this, true, false)" onMouseOut="highlight_l(this, false, false)" onClick="highlight_l(this, false, true)" class=" i w13w"><SPAN>―――― i ――――</SPAN></DIV><DIV class=sep></DIV></DIV>'
    
     document.getElementById("symmhead").innerHTML=str
     document.getElementById("symmfoot").innerHTML=str

      bx=document.getElementsByClassName("bx")
      base=parseInt(window.getComputedStyle(bx[0],"").getPropertyValue("height"))
      for (j=0; j<bx.length; j++)
        {
           el=bx[j].getElementsByTagName("DIV")
           for (i=0;i<el.length;i++)
             {
                //alert ("i="+i+"   class="+el[i].className+"  "+(el[i].className.indexOf("T")>-1))
                bord=parseInt(window.getComputedStyle(el[i],"").getPropertyValue("border-left-width")) +
                     parseInt(window.getComputedStyle(el[i],"").getPropertyValue("border-right-width"))
                //if (i<10) alert (bord)
                if (el[i].className.indexOf("w13w")>-1) el[i].style.width= (13*base-bord)+"px"
                if (el[i].className.indexOf("w11w")>-1) el[i].style.width= (11*base-bord)+"px"
                if (el[i].className.indexOf("w9w")>-1) el[i].style.width= (9*base-bord)+"px"
                if (el[i].className.indexOf("w7w")>-1) el[i].style.width= (7*base-bord)+"px"
                if (el[i].className.indexOf("TTTTT")>-1 || el[i].className.indexOf("w5w")>-1) el[i].style.width= (5*base-bord)+"px"
                else if (el[i].className.indexOf("TTTT")>-1) el[i].style.width= (4*base-bord)+"px"
                else if (el[i].className.indexOf("TTT")>-1 || el[i].className.indexOf("w3w")>-1) el[i].style.width= (3*base-bord)+"px"
                else if (el[i].className.indexOf("TT")>-1) el[i].style.width= (2*base-bord)+"px"
                else if (el[i].className.indexOf("T")>-1) el[i].style.width= (base-bord)+"px"
                else if (el[i].className.indexOf("zero")>-1) el[i].style.width= (base-bord)+"px"
                if (tit=el[i].title)
                   {
                       if (tit == "Rz") rel="x × y"
                        else if (tit == "Rx") rel="y × z"
                        else if (tit == "Ry") rel="z × x"
                        else if (tit == "Rx,Ry") rel="y × z"
                        else if (tit.indexOf("±") > -1) rel=tit.replace (/±/,"")
                        else rel=tit
                       el[i].alt=rel
                       //el[i].title += " ⟶ " + rel
                   }
                  else
                   {
                       el[i].alt=el[i].className.charAt(0)
                       //alert(el[i].alt)
                       //el[i].title=el[i].className.charAt(0)
                       //alert (el[i].className)
                   }
             }
       }
     group.cubic=cubic
     e1=document.getElementById("rottransdiv").getElementsByClassName("setfontsize")[0]; if(e1) {e1.value=0; e1.onchange()  }

   }

function unhighlight_rottrans_line(e)
   {
        e.parentNode.className = e.parentNode.className.replace(/ *unhover */g," ").replace(/ *hooover */g," ").replace(/  *$/,"");
   }

function toggle_rottrans_line(e)
   {
        var cn=e.parentNode.className;
        var cnn=cn.replace(/ hoo*ver/g," ").replace(/unhover/,"hooover").replace(/(un)*hoo?ver/g,"").replace(/  *$/,"");
        cnn+= (cn.match(/hoover/))?" unhover":" hoover";
        e.parentNode.className = cnn;
  }

      
function rottrans_refine(chkbox)
  {
     e1=document.getElementById("rottrans").getElementsByTagName("TBODY")[0].getElementsByClassName("bx")
     e2=document.getElementById("rottrans").getElementsByTagName("TBODY")[0].getElementsByClassName("prodwrap")
     e3=document.getElementById("rottrans").getElementsByTagName("TR")
     e4=document.getElementById("rottrans").getElementsByTagName("TBODY")[0].getElementsByTagName("TR")
     e5=document.getElementById("bx_control").getElementsByTagName("LABEL")
     c1=document.getElementById("rottrans_show_bx").checked
     c2=document.getElementById("rottrans_show_cart").checked
     c3=document.getElementById("rottrans_show_spher").checked
     c4=document.getElementById("rottrans_show_empty").checked
     
     if (!c1&&!c2&&!c3) {chkbox.checked=true; return}

     for (i=0;i<e1.length;i++) e1[i].style.display=(!c1)?"none":"block"
     for (i=0;i<e2.length;i++) e2[i].style.display=(c2)?"block":"none"
     for (i=0;i<e3.length;i++) e3[i].firstChild.nextSibling.style.display=(c3)?"table-cell":"none"
     for (i=0;i<e4.length;i++) e4[i].style.display=(c4 && (e4[i].getElementsByClassName("q").length==0))?"none":"table-row"

     for (i=0;i<e4.length;i++) 
         {
             e4[i].firstChild.style.paddingTop=(!c3&&!c2)?"0.2em":""; 
             e1[i].parentNode.style.paddingTop=(!c1&&c2&&!c3)?"0em":""
             e1[i].parentNode.previousSibling.style.paddingTop=(!c2 || !c1)?"0.2em":""
             e1[i].parentNode.previousSibling.style.verticalAlign=(!c2 || !c1)?"top":""
             e1[i].style.paddingBottom=(!c3&&!c2)?"0.4em":""
         }

     if (!c1&&!c2&&c3 || !c1&&c2&&!c3 || c1&&!c2&&!c3)
        {
           for (i=0; i<e5.length-1; i++) {e5[i].className= (e5[i].getElementsByTagName("INPUT")[0].checked) ? "inactive" : ""}
        }
      else
        {
           for (i=0; i<e5.length-1; i++) {e5[i].className= ""}
        }
           
           
  }

function unhighlight_charrow () {this.parentNode.className = this.parentNode.className.replace(/ *unhover */g," ").replace(/  *$/,"")}
function toggle_charrow () {if (this.parentNode.className != "hoover") {this.parentNode.className="hoover"} else {this.parentNode.className="unhover"}}

function highlight_sopcol () { highlight_sopcol_both (this,true,false) }
function unhighlight_sopcol () { highlight_sopcol_both (this,false,false) }
function toggle_sopcol () { highlight_sopcol_both (this,false,true) }
function highlight_sopcol_both (tthis,flag1, flag2)
   {
        e1=tthis.parentNode.parentNode.getElementsByClassName("sopcell")
        e2=document.getElementById("chartab").getElementsByTagName("COL")
        j=2

        for (i=0; i<e1.length;i++)
          {
             if (tthis==e1[i] && !flag2) e2[i+j].className=(flag1)?e2[i+j].className+" hover":e2[i+j].className.replace(/ *hover */," ").replace (/   */g," ").replace(/  *$/,"")
             //if (tthis==e1[i] && flag2) alert (i+" "+(i+j)+" "+(e2[i+j].className.indexOf("hoover")==-1))
             if (tthis==e1[i] && flag2) e2[i+j].className=(e2[i+j].className.indexOf("hoover")==-1)?e2[i+j].className+" hoover":e2[i+j].className.replace(/ *ho+ver */g," ").replace (/   */g," ").replace(/  *$/,"")
          }
  
   }
function highlight_trancol () { highlight_trancol_both (this,true,false) }
function unhighlight_trancol () { highlight_trancol_both (this,false,false) }
function toggle_trancol () { highlight_trancol_both (this,false,true) }
function highlight_trancol_both (tthis,flag1, flag2)
   {
        e1=tthis.parentNode.parentNode.getElementsByClassName("transpan")
        e2=document.getElementById("chartab").getElementsByTagName("COL")
        for (j=0; j<e2.length;j++) {if (e2[j].className.indexOf("tran")>-1) break}

        for (i=0; i<e1.length;i++)
          {
             if (tthis==e1[i] && !flag2) e2[i+j].className=(flag1)?e2[i+j].className+" hover":e2[i+j].className.replace(/ *hover */," ").replace (/   */g," ").replace(/  *$/,"")
             //if (tthis==e1[i] && flag2) alert (i+" "+(i+j)+" "+(e2[i+j].className.indexOf("hoover")==-1))
             if (tthis==e1[i] && flag2) e2[i+j].className=(e2[i+j].className.indexOf("hoover")==-1)?e2[i+j].className+" hoover":e2[i+j].className.replace(/ *ho+ver */g," ").replace (/   */g," ").replace(/  *$/,"")
          }
  
   }

function show_dist_chartab(that)
   {
      if (that.checked) document.getElementById("chartab").className+=" showdistort"
       else document.getElementById("chartab").className = document.getElementById("chartab").className.replace(/ showdistort/,"")
   }
     
      
function highlight_term () { highlight_term_both (this,true,false) }
function unhighlight_term () { highlight_term_both (this,false,false) }
function highlight_click_term () { if (!this.className.match(/hoover/)) highlight_term_both (this,true,true) }
function highlight_term_both (tthis,flag1,flag2)
   {
      td=tthis.parentNode.parentNode.parentNode
      el=td.getElementsByTagName("SPAN")
      for (i=0; i<el.length; i++)
         {
             tit=el[i].title.substring(0,tthis.alt.length)
             if (!tit && el[i].className!= "prod") tit=el[i].className.charAt(0)
             //if (tit) alert ("i="+i+" tit="+tit +" alt="+tthis.alt)
             if (tit == tthis.alt)
                {
                    ell=el[i]
                    if (el[i].parentNode.className.indexOf("deg")>-1) ell=el[i].parentNode
                    if (flag2)
                       {
                          flag1=!ell.className.match(/hoover/)
                          tthis.className=(flag1)?(tthis.className.replace(/ *unhighlight */g," ").replace (/   */g," ").replace(/  *$/,"")+" clicked").replace(/clicked clicked/,"clicked"):tthis.className.replace(/ *clicked */g," ").replace (/   */g," ").replace(/  *$/,"")+" unhighlight"
                          ell.className = (flag1)?ell.className+" hoover":ell.className.replace(/ *hoover */g," ").replace (/   */g," ").replace(/  *$/,"")
                          if (group.cubic) // wtf??  && ell.parentNode.parentNode.parentNode.firstChild.innerHTML.replace(/<[^<>]*>/g,"").replace(/  */g,"") != 'A')
                             {
                                // set neighboring boxes
                                if ((e=tthis.previousSibling) && e.className.charAt(0)==tthis.className.charAt(0)) {e.className=tthis.className}
                                if (e &&(e=e.previousSibling) && e.className.charAt(0)==tthis.className.charAt(0)) {e.className=tthis.className}
                                if ((e=tthis.nextSibling) && e.className.charAt(0)==tthis.className.charAt(0)) {e.className=tthis.className}
                                if (e && (e=e.nextSibling) && e.className.charAt(0)==tthis.className.charAt(0)) {e.className=tthis.className}
                                // set neighboring terms
                                if (ell.previousSibling && (e=ell.previousSibling.previousSibling) && e.className.charAt(0)==ell.className.charAt(0)) {e.className=ell.className}
                                if (e && el.previousSibling &&(e=e.previousSibling.previousSibling) && e.className.charAt(0)==ell.className.charAt(0)) {e.className=ell.className}
                                if (ell.nextSibling && (e=ell.nextSibling.nextSibling) && e.className.charAt(0)==ell.className.charAt(0)) {e.className=ell.className}
                                if (e && e.nextSibling && (e=e.nextSibling.nextSibling) && e.className.charAt(0)==ell.className.charAt(0)) {e.className=ell.className}
                             }
                          return
                       }
                    else if (ell.className.match(/hoover/))
                       {
                          return
                       }
                    tthis.className=tthis.className.replace(/ *unhighlight */g," ").replace (/   */g," ").replace(/  *$/,"")
                    ell.className = (flag1)?ell.className+" hover":ell.className.replace(/ *ho?ver */g," ").replace (/   */g," ").replace(/  *$/,"")
                    //if (group.cubic)
                    //   {
                    //      if ((e=tthis.previousSibling) && e.className.charAt(0)==tthis.className.charAt(0)) {e.className=tthis.className}
                    //      if (e &&(e=e.previousSibling) && e.className.charAt(0)==tthis.className.charAt(0)) {e.className=tthis.className}
                    //      if ((e=tthis.nextSibling) && e.className.charAt(0)==tthis.className.charAt(0)) {e.className=tthis.className}
                    //      if (e && (e=e.nextSibling) && e.className.charAt(0)==tthis.className.charAt(0)) {e.className=tthis.className}
                    //   }
                    //break
                }
          }
   }
   
function highlight_box () { highlight_box_both (this,true) }
function unhighlight_box () { highlight_box_both (this,false) }
function highlight_box_both (tthis,flag)
   {
      div=tthis.parentNode.parentNode
      //alert(div)
      //alert(div.innerHTML)
      el=div.getElementsByClassName("q")
      for (i=0; i<el.length; i++)
         {
             tit=tthis.title
             if (tthis.className.indexOf("deg")>-1) {tit=tthis.getElementsByTagName("SPAN")[0].title; }
             if (!tit) tit=tthis.className.charAt(0)
             //alert (i+" alt="+el[i].alt +" tit="+tit.substring(0,el[i].alt.length))
             if (tit.substring(0,el[i].alt.length) == el[i].alt)
                {
                    el[i].className= (flag)?el[i].className+" hover":el[i].className.replace(/ *hover */," ").replace (/   */g," ").replace(/  *$/,"")
                          if (group.cubic) 
                             {
                                var cn
                                if (tthis.previousSibling && (e=tthis.previousSibling.previousSibling) && e.className.charAt(0)==tthis.className.charAt(0)) {cn=e.className.replace(/ hver/g,"") + ((!flag)?"":" hver"); if (cn!=e.className) e.className=cn}
                                if (e && e.previousSibling && (e=e.previousSibling.previousSibling) && e.className.charAt(0)==tthis.className.charAt(0)) {cn=e.className.replace(/ hver/g,"") + ((!flag)?"":" hver"); if (cn!=e.className) e.className=cn}
                                if (tthis.nextSibling && (e=tthis.nextSibling.nextSibling) && e.className.charAt(0)==tthis.className.charAt(0)) {cn=e.className.replace(/ hver/g,"") + ((!flag)?"":" hver"); if (cn!=e.className) e.className=cn}
                                if (e && e.nextSibling && (e=e.nextSibling.nextSibling) && e.className.charAt(0)==tthis.className.charAt(0)) {cn=e.className.replace(/ hver/g,"") + ((!flag)?"":" hver"); if (cn!=e.className) e.className=cn}
                             }
                    //if (el[i].previousSibling.className.indexOf("q")>-1) 
                    //break
                }
          }
   }
   
function highlight_l (div, flag1, flag2)
  {
       // mousein: flag1 = true,  mouseout: flag1=false, click: flag2=true
       l= (div.className.replace (/ *(w[0-9]*w|clicked) */g,""))
       el=document.getElementById("rottrans").getElementsByTagName("TBODY")[0].getElementsByClassName(l)
       my=document.getElementById("rottrans").getElementsByClassName(div.className)
       if (flag1 || flag2 && div.className.indexOf("clicked")==-1)
          {
             if (flag2) my[0].className += " clicked"
             if (flag2) my[1].className += " clicked"
             for (i=0; i<el.length; i++)
                 {
                     e1=el[i]
                     if (e1.parentNode.className.indexOf("deg")>-1) e1=e1.parentNode
                     e1.className = e1.className.replace (/ *unhighlight */g, " ").replace (/   */g," ").replace(/  *$/,"") + ((flag2)?" hoover clicked":" hover")
                 }
          }
        else
          {
             if (flag2) my[0].className=my[0].className.replace (/ clicked/, " ").replace (/   */g," ").replace(/  *$/,"")
             if (flag2) my[0].className=my[0].className.replace (/ clicked/, " ").replace (/   */g," ").replace(/  *$/,"")
             l= (div.className.replace (/ *(w[0-9]*w|clicked) */g,""))
             el=document.getElementById("rottrans").getElementsByTagName("TBODY")[0].getElementsByClassName(l)
             for (i=0; i<el.length; i++)
                 {
                     e1=el[i]
                     if (e1.parentNode.className.indexOf("deg")>-1) e1=e1.parentNode
                     if (!flag2 && (e1.className.match(/lcontainer/)=="lcontainer" && div.className.indexOf("clicked")==-1)) e1.className= e1.className.replace (/ (ho+ver|clicked)/g, "").replace (/   */g," ").replace(/  *$/,"")
                      else if (!flag2 && (e1.className.match(/lcontainer/)=="lcontainer")) e1.className= e1.className.replace (/ (ho+ver)/g, "").replace (/   */g," ").replace(/  *$/,"")
                      else if ((e1.className.match(/lcontainer/)=="lcontainer")) e1.className= e1.className.replace (/ clicked/,"")
                      else if (flag2) e1.className = e1.className.replace (/ (clicked|ho+ver)/g, " ").replace (/   */g," ").replace(/  *$/,"")
                      else e1.className = e1.className.replace (/ (hover)/g, " ").replace (/   */g," ").replace(/  *$/,"")
                 }
          }
  }

var globdbg=window.location.href.match(/dbg=2/)

function make_chartab()
   {
      str=document.getElementsByTagName("PRE")[0].innerHTML 
      chartabold=str.replace(/(\r\n|\n|\r)/gm, "@")
      //document.getElementsByTagName("PRE")[0].innerHTML=str


      hr=document.getElementsByTagName ("HR")[0]
      e=document.createElement("DIV")
      e.id="chartabdiv"
      if (group.orig[0].charAt(group.orig[0].length-1) != "'") e.className="noprime"

      str="<TABLE  id=chartab><COL></COL><COL></COL>"
      for (i=0;i<group.nclass;i++) str += '<COL class="'+ ((group.intsop[i])?"int":"real")+' sop"></COL>'
      str+= "<COL></COL><COL class=space></COL>"
      for (i=0;i<7;i++) str += '<COL class=tran></COL>'
      if (group.noncanonical) str+="<COL class=equiv></COL>"
      str += "<THEAD><TR><TH colspan=2>"+document.getElementById("grp").innerHTML+"<SPAN id=grporder><I>h</I>="+group.grporder+"</SPAN>"
      for (i=0;i<group.nclass;i++) {str += "<TH scope=col class=sopcell>"+group.sop[i]}
      str+= '<TD class=distorthead></TD><TD class=space><TH class=tran scope=col ><SPAN class=transpan>Rot</SPAN></TH><TH class=tran scope=col ><SPAN class=transpan>Tr=p</SPAN></TH> <TH class=tran scope=col ><SPAN class=transpan>d</SPAN></TH> <TH class=tran scope=col ><SPAN class=transpan>―&thinsp;f&thinsp;―</SPAN></TH> <TH class=tran scope=col ><SPAN class=transpan>―&thinsp;g&thinsp;―</SPAN></TH> <TH class=tran scope=col ><SPAN class=transpan>―― h ――</SPAN></TH> <TH class=tran scope=col ><SPAN class=transpan>―― i ――</SPAN></TH>'
      if (group.noncanonical) str+='<TH scope=col class=equiv>Equivalent<BR>in <A href="'+group.equiv+'.html">' + group.equiv.replace(/C1h/,"C<SUB>s</SUB>").replace(/C(2[vhd]?)/,"C<SUB>$1</SUB>")
      str += "</THEAD><TBODY><TR class=pseudoborder>"+repeat("<TD>",group.nclass+11)+"<TR class=spacer>"+repeat("<TD>",group.nclass+11)

      
      var i=0,j=0
      for (j=0;i<group.nclass;j++)
        {
          line=(split_line(chartabold,j))
          if (line.indexOf('"irred"')>-1)
             {
                str1= "<TR class=charline><TH scope=row class=irrep>"+group.irrep[i]
                if (line.indexOf('class="red"')>-1) str1+= "<TD class=alert>*   </TD>"
                   else str1+="<TD>"
                str1 += line.match (/   *[1-9][\-0-9. ]*/)[0].replace (/  *[. ]*$/,"  ").replace(/\.00* /g," ").replace (/(  *)/g, "   $1")
                          .replace (/ ([0-9])\.([0-9]+) /g, ' <TD class=charfloat><SPAN class=float><SPAN class="sign signplus">+</SPAN><SPAN class=pre>$1</SPAN><SPAN class=decpoint>.</SPAN><SPAN class=post>$2</SPAN></SPAN></TD>  ')
                          .replace (/ -([0-9])\.([0-9]+) /g, ' <TD class=charfloat><SPAN class=float><SPAN class="sign">−</SPAN><SPAN class=pre>$1</SPAN><SPAN class=decpoint>.</SPAN><SPAN class=post>$2</SPAN></SPAN></TD>  ')
                          .replace (/ ([0-9]+) /g, ' <TD class=charint><SPAN class=int><SPAN class="sign signplus">+</SPAN><SPAN class=intnum>$1</SPAN></SPAN></TD>  ')
                          .replace (/ -([0-9]+) /g, ' <TD class=charint><SPAN class=int><SPAN class="sign">−</SPAN><SPAN class=intnum>$1</SPAN></SPAN></TD>  ')
                str += str1+"<TD class=distort></TD><TD class=space>"
                if (group.grpname.match(/[TIO]/))
                   {
                       str1=line.match(/[T.][T.][T.][ T.]*$/).toString().replace(/^ */,'').replace (/([T.>]) /g, "$1 <TD class=tran> ")
                       if (group.orig[i].match(/^H/)) str1=str1.replace (/TTTTT/g,"«TTTTT»")
                        else if (group.orig[i].match(/^G/)) str1=str1.replace (/TTTT/g, "«TTTT»")
                        else if (group.orig[i].match(/^T/)) str1=str1.replace (/TTT/g, "«TTT»")
                        else if (group.orig[i].match(/^E/)) str1=str1.replace (/TT/g, "«TT»")
                        else if (group.orig[i].match(/^A/)) str1=str1.replace (/(^|[ .>])T/g, "$1«T»").replace (/(^|[ .»>])T/g, "$1«T»")
                       str1=str1.replace(/«([T]+)»/g, "<SPAN class=prod>$1</SPAN>")
                   }
                 else if (line.match(/[ .]*<span[^<>]*class="prod".*/)) 
                   {
                      str1=line.match(/[ .]*<span[^<>]*class="prod".*/)[0].replace(/^ */,'').replace (/([.>]) /g, "$1 <TD class=tran> ")
                   }
                  else 
                   {
                      str1=line.match(/[T.][T.][T.][ T.]*$/).toString().replace(/^ */,'').replace (/([T.>]) /g, "$1 <TD class=tran> ") // Problem here with IE10 (fails)
                   }
                str += '<TD class=tran>' + str1
              if (group.noncanonical) str+="<TD class=equiv>"+group.equivirr[i].replace(/([AB])([12]?[gu]?)([′″]?)/,"<SPAN>$1<SUB>$2</SUB><SUP>$3</SUP></SPAN>").replace(/<(SU[BP])><\/\1>/g,"").replace (/SUP/,"SUP class=minisop")
                i++
             }
        }

      str+="</TABLE>"

      if (chartabold.indexOf ("Irrational character values")>-1)
         {
            chartabold=chartabold.substring(chartabold.indexOf ("Irrational character values"),chartabold.length)
            str += '<TABLE border=1 class=stickleft id=irrational><TBODY id=irrationalbody>'
            j=0
            line=split_line(chartabold,j)
            str1=""
            for (;line!='';)
              {
                line1=line
                if (line1.match(/ = /g).length==1) line1=line1.replace(/ = /," <TD class=eq>=<TD colspan=5>")
                   else if (line1.match(/ = /g).length==2 && line1.match(/=.*=.*cos\(/)) line1=line1.replace(/ = /," <TD class=eq>=<TD>").replace(/ = /," <TD class=eq>=<TD colspan=3>")
                   else if (line1.match(/ = /g).length==2) line1=line1.replace(/ = /," <TD class=eq>=<TD>").replace(/ = /," <TD><TD><TD class=eq>=<TD>")
                   else line1=line1.replace(/ = /g," <TD class=eq>=<TD>")
                line1='<TR><TD>'+line1.replace(/2\*cos/g, '2&thinsp;cos').replace (/\*/g,"").replace(/^ *-/,'−')
                //str1+="<TR>"+line.replace(/([\-.0-9])/, "<TD>$1").replace(/ = /,'<TD class=eq>=<TD colspan=1>').replace(/ = /,'<TD class=eq>=<TD>').replace(/ = /,'<TD class=eq>=<TD>').replace(/ colspan=1(.*\>=\<.*\>=\<.*)$/,"$1").replace (/>-([0-9]\.)/, ">−$1").replace(/2\*cos/g, '2&thinsp;cos').replace (/\*/g,"")
                str1+=line1
                j++
                line=split_line(chartabold,j)
              }
            str1=str1.replace (/<TD> *Irrational character values:/i, "<TH scope=rowgroup onMouseOver='this.parentNode.className=\"nohighlight\"' onMouseOut='this.parentNode.className=\"\"' rowspan="+j+">Irrational character values:<TD>")
            if (j==1) str1=str1.replace(/values/, "value")
            //if (j>2) str1=str1.replace (/Irrational character values/, "Irrational<BR>character<BR>values")
            str += str1+"</TBODY></TABLE>"
         }

      el=document.getElementById("reduceform")
      str+='<DIV class=stickleft id=lower_symmetry_chartab style="margin-top:1em;padding-left:3em; display:none"><P class=labelp><LABEL><INPUT onChange="show_dist_chartab(this)" type=checkbox name=showdistortchartab>Show symmetry lowering by distortion</LABEL></DIV>'
      try {if (group.nclass>=10) str+='<FORM class=stickleft onSubmit="return false"><DIV style="padding-left:3em">Set font size in table to <INPUT type=number style="width:4em" step="any" pattern="[0-9]*\.[0-9]" id="set_font_size_chartab" class=setfontsize onChange="set_font_size(this)" value="'+parseInt(window.getComputedStyle(el, "").getPropertyValue("font-size"))+'" defval="'+parseInt(window.getComputedStyle(el, "").getPropertyValue("font-size"))+'"> px</FORM></DIV>'} catch (foo) {}
      e.innerHTML=str
      hr.parentNode.insertBefore(e,hr)
      e1=document.getElementById("chartabdiv").getElementsByClassName("setfontsize")[0]; if (e1) {e1.value=0; e1.onchange()  }

      if (group.cryst) e.getElementsByTagName("TBODY")[0].className="cryst"

      el=e.getElementsByTagName("TBODY")[0].getElementsByClassName ("irrep")
      for (i=0;i<el.length;i++)
          {
             el[i].onclick=toggle_charrow
             el[i].onmouseout=unhighlight_charrow
             el[i].style.cursor="pointer"
          }
      el=e.getElementsByTagName("THEAD")[0].getElementsByClassName ("sopcell")
      for (i=0;i<el.length;i++)
          {
             el[i].onmouseout=unhighlight_sopcol
             el[i].onmouseover=highlight_sopcol
             el[i].onclick=toggle_sopcol
             el[i].style.cursor="pointer"
          }
      el=e.getElementsByClassName ("transpan")
      for (i=0;i<el.length;i++)
          {
             el[i].onmouseout=unhighlight_trancol
             el[i].onmouseover=highlight_trancol
             el[i].onclick=toggle_trancol
          }

      for (i=0; i<group.nclass; i++)
         {
            for (j=0; j<group.nclass; j++)
               {
                  cell=e.getElementsByTagName("TBODY")[0].getElementsByTagName("TR")[j].getElementsByTagName("TD")[i+2]
                  if (!group.intsop[i])
                     {
                         if (i>0 && !group.intsop[i-1]) {cell.style.paddingLeft="0.3em"}
                         if (i<group.nclass-1 && !group.intsop[i+1]) {cell.style.paddingRight="0.3em"}
                     }
               }
          }


      document.getElementsByTagName("PRE")[0].parentNode.removeChild(document.getElementsByTagName("PRE")[0])

      e=document.createElement("P")
      e.innerHTML='The Character Table can also be viewed in a <A href="'+window.location.href.replace (/\?.*/, "")+"?fmt=simple"+'">simpler, ASCII-like format</A>.'
      e.className="stickleft"
      hr.parentNode.insertBefore(e,hr)


    }

function redo_navig ()
    {
       tab=document.getElementsByClassName("navigtab")[0]
       if (!tab) tab=document.getElementsByClassName("navig_iso")[0]
       if (!tab) return
       div=document.createElement("DIV")
       div.id="navigdiv"
       cn=tab.className
       div.innerHTML="<TABLE class="+tab.className+" id="+tab.className+">"+tab.innerHTML.replace(/Schönflies/,"Schoenflies")+"</TABLE>"
       tab.parentNode.replaceChild(div,tab)
       td=document.getElementById(cn).getElementsByTagName("TD")
       for (i=0;i<td.length;i++)
           { 
               //alert (td[i].innerHTML)
               if (!td[i].innerHTML.match (/href=/) && !td[i].innerHTML.match (/input=/i) && td[i].innerHTML.length > 5) break
           }
       //alert(getComputedStyle(td[i],"").getPropertyValue("width")+" "+getComputedStyle(td[i],"").getPropertyValue("height"))
       lf=td[i].getBoundingClientRect().left + parseInt(getComputedStyle(td[i],"").getPropertyValue("width"))/2; 
       tp=td[i].getBoundingClientRect().top-document.getElementById("navigdiv").getBoundingClientRect().top + parseInt(getComputedStyle(td[i],"").getPropertyValue("height"))/2
       //alert (lf+" "+tp)
       ////document.getElementById("navigdiv").style.background="radial-gradient(at "+lf+"px "+tp+"px ,  rgba(255, 255, 15, 1) , rgb(143, 252, 149), rgb(189, 199, 253), rgb(115, 137, 253))"
       document.getElementById("navigdiv").style.background="radial-gradient(at "+lf+"px "+tp+"px ,  rgb(174, 186, 252), rgb(143, 252, 149), rgb(255, 255, 119), rgb(255, 255, 0))"
       //alert (document.getElementById("navigdiv").style.background)
    }

function is_even (num) {return (is_integer(num) && num == parseInt(num/2+0.01)*2)}
function is_odd (num) {return (is_integer(num) && num != parseInt(num/2+0.01)*2)}
function is_integer (num) {return (num == parseInt(num+0.01))}
function is_power_of_two (num) {return (is_integer(num) && (num==2||is_power_of_two(num/2)))}
function is_prime (num)
   {
      var i, is_prime =   is_odd(num) || (num==2)
      if (! is_prime) return false

      var nmax = Math.sqrt(1.0*num)+1
      for (i=3; i<=nmax; i++)
          {
             is_prime = ! is_integer (num/i)
             if (!is_prime) return false
          }
     return true
  }
function repeat(str,n) {var r="",i; for (i=0;i<n;i++) r+=str; return r}

function make_subgroup_oct()
    {
      var i,j,k
      var tetr = new Array(), trig=new Array(),oct=new Array()
      if (window.location.href.indexOf("file://")==-1 && group.grpname.charAt(0)=="I") {document.getElementById("subgrouppar").innerHTML="This is not (yet?) implemented for icosahedral groups."; return}
      if (group.grpname=="T") {       oct=[];     
                                      trig=["C3"];               
                                      tetr=["D2", "C2"];                              
                                      group.dist=["","2 D2","C2 C3 C1"]; 
                                      group.distvec=[,[0,0],[1,2]]}
       else if (group.grpname=="Td") {oct=["T"];  
                                      trig=["C3v", "C3", "C1h"]; 
                                      tetr=["D2d", "S4", "D2", "C2v", "C2"];          
                                      group.dist=["","T","D2d D2","S4 C3 C1h","C2v C3v C1"];
                                      group.distvec=[,[0],[1,3],[2,7,8],[4,6]]}
       else if (group.grpname=="Th") {oct=["T"];  
                                      trig=["S6", "C3", "S2"];   
                                      tetr=["D2h", "D2", "C2h", "C2v", "C2", "C1h" ]; 
                                      group.dist=["","2 D2h","C2h S6 S2","T","2 D2","C2v C3 C1h"]
                                      group.distvec=[,[1],[3,7,9],[0],[2],[4,8,6]]}
       else if (group.grpname=="O") { oct=["T"];  
                                      trig=["D3", "C3", "C2"];   
                                      tetr=["D4", "D4", "C4", "D2", "D2", "C2" ];     
                                      group.dist=["","T","D4 D2","C4 C3 C1","D2 D3 C1"]
                                      group.distvec=[,[0],[1,4],[3,8],[5,7]]}
       else if (group.grpname=="Oh") {oct=["T","Td","Th","O"]; 
                                      trig=[ "D3d", "S6", "D3", "C3v", "C3", "C2h", "C2", "C1h", "S2"];  
                                      tetr=[ "D4h", "S4", "D4", "C4h", "C4v", "C4", "D2d", "D2d", "D2h", "D2h", "D2", "D2", "C2h", "C2v", "C2v", "C2v", "C2", "C1h"];
                                      group.dist=["","Th","D4h D2h","C4h S6 C2h","D2h D3d C2h","O","Td","D4 D2d","C4v C3v C2v","D2d D3 C2v"]
                                      group.distvec=[,[2],[4,12],[7,23,27],[13,22,27],[3],[1],[6,11],[8,19,25],[10,19,24]]}

       
       for (i=0;i<oct.length;i++) { genchar[genchar.length]= make_generators (oct[i]) }

       for (i=0;i<tetr.length;i++) { genchar[genchar.length]= make_generators (tetr[i]) }
       if (group.grpname=="O") {genchar[genchar.length-5].sop=["C4","C2′","C2"];genchar[genchar.length-5].noncanonical=true;genchar[genchar.length-5].ignoreme=true;genchar.ignoreme=1}       // D4
       if (group.grpname=="O") {genchar[genchar.length-2].sop=["C2","C2′","C2′"];genchar[genchar.length-2].noncanonical=true}      // D2
       if (group.grpname=="Oh") {genchar[genchar.length-11].sop=["S4","σh","C2′"];genchar[genchar.length-11].noncanonical=true}     // D2d
       if (group.grpname=="Oh") {genchar[genchar.length-9].sop=["C2","C2′","i","C2′"];genchar[genchar.length-9].noncanonical=true} // D2h
       if (group.grpname=="Oh") {genchar[genchar.length-7].sop=["C2","C2′","C2′"];genchar[genchar.length-7].noncanonical=true}     // D2
       if (group.grpname=="Oh") {genchar[genchar.length-5].sop=["C2","σh","σh"];genchar[genchar.length-5].noncanonical=false}       // C2v
       if (group.grpname=="Oh") {genchar[genchar.length-4].sop=["C2","σd","σd"];genchar[genchar.length-4].noncanonical=true}       // C2v
       if (group.grpname=="Oh") {genchar[genchar.length-3].sop=["C2′","σh","σd"];genchar[genchar.length-3].noncanonical=true}      // C2v

       for (i=0;i<trig.length;i++) { genchar[genchar.length]= make_generators (trig[i]) }
       if (group.grpname=="Td") {genchar[genchar.length-1].sop[0]="σd";genchar[genchar.length-1].noncanonical=true}  // Cs
       if (group.grpname=="O") {genchar[genchar.length-1].sop[0]="C2′";genchar[genchar.length-1].noncanonical=true}  // C2
       if (group.grpname=="Oh") {genchar[genchar.length-2].sop[0]="σd";genchar[genchar.length-2].noncanonical=true}  // Cs
       if (group.grpname=="Oh") {genchar[genchar.length-3].sop[0]="C2′";genchar[genchar.length-3].noncanonical=true} // C2
       if (group.grpname=="Oh") {genchar[genchar.length-4].sop[0]="C2′";genchar[genchar.length-4].noncanonical=true} // C2h
       if (group.grpname=="Oh") {genchar[genchar.length-6].noncanonical=true} // C3v

       var dbg=false
       for (i=0;i<genchar.length;i++)
           {
              //alert ('Subsymmetry ('+genchar[i].sop.length+'): '+genchar[i].name+'\n'+genchar[i].sop[0]+': '+genchar[i].chars[0]+'\n'+genchar[i].sop[1]+': '+genchar[i].chars[1]+'\n'+genchar[i].sop[2]+': '+genchar[i].chars[2])
              if (dbg) console.log ("Subsymmetry: "+genchar[i].name+"   sop="+genchar[i].sop+"\n     "+genchar[i].sop[0]+": "+genchar[i].chars[0]+ (genchar[i].sop[1]? "\n     "+genchar[i].sop[1]+": "+genchar[i].chars[1]:"") +" noncan,ignore="+genchar[i].noncanonical+" "+genchar[i].ignoreme)
           }

      genchar.removed=0
      genchar.ignoreme=(group.grpname=="O"?1:0)
      genchar.trivial=0



       genchar = calc_symmetry_reduction(genchar)

       if (group.grpname=="Oh") genchar.removed=3
       show_subgroup_table (genchar)
    }
function make_subgroup_ico()
    {
      var i,j,k
      var penta = new Array(), trig=new Array(),isometric=new Array(), ortho=new Array()
      if (group.grpname=="I") {  isometric=["T"];           trig=["D3","C3"];                    penta=["D5","C5"];                     ortho=["D2","C2"];                            ; 
                                 group.dist=["","C5,C3,C2","C5,C3,C2", "T,D3,C3,D2", "D5,D3, 2&thinsp;D2,C1"]; group.distvec=[,[2,4,6],[2,4,6],[0,3,4,5],[1,3,5]]    }
      if (group.grpname=="Ih") { isometric=["I","Th","T"];  trig=["D3d","S6", "D3","C3v","C3"];  penta=["D5d","S10", "D5","C5v","C5"];  ortho=["D2h","D2","C2h","C2v","C2","C1h","S2"]; 
                                 group.dist=["","S10,S6,C2h","S10,S6,C2h","Th,D3d,C3v,S2","D5d,D3d, 2&thinsp;D2h,S2",  "I","C5v,C3v,C2v","C5v,C3v,C2v","T,D3,C3v,C2v","D5,D3, 2&thinsp;D2,C2v"];
                                 group.distvec=[,[4,9,15],[4,9,15],[1,8,11,19],[3,8,13,19],[0],[6,11,16],[6,11,16],[2,10,11,16],[5,10,14,16]]}


       
       for (i=0;i<isometric.length;i++) {  
                                            genchar[genchar.length]= make_generators (isometric[i]) 
                                            genchar[genchar.length-1].noncanonical=false
                                        }

       for (i=0;i<penta.length;i++) { 
                                        genchar[genchar.length]= make_generators (penta[i]) 
                                        genchar[genchar.length-1].noncanonical=(genchar[genchar.length-1].name=="C5v")
                                        if (genchar[genchar.length-1].name=="D5") {genchar[genchar.length-1].sop=["C5","C2"]}
                                        if (genchar[genchar.length-1].name=="D5d") {genchar[genchar.length-1].sop=["S10","σ","i"]}
                                        if (genchar[genchar.length-1].name=="C5v") {genchar[genchar.length-1].sop=["C5","σ"]}
                                   }
       for (i=0;i<trig.length;i++) { 
                                        genchar[genchar.length]= make_generators (trig[i]) 
                                        genchar[genchar.length-1].noncanonical=(genchar[genchar.length-1].name=="C3v")
                                        if (genchar[genchar.length-1].name=="D3") genchar[genchar.length-1].sop=["C3","C2"]
                                        if (genchar[genchar.length-1].name=="D3d") genchar[genchar.length-1].sop=["S6","σ","i"]
                                        if (genchar[genchar.length-1].name=="C3v") genchar[genchar.length-1].sop=["C3","σ"]
                                   }
       for (i=0;i<ortho.length;i++) { 
                                        genchar[genchar.length]= make_generators (ortho[i]) 
                                        genchar[genchar.length-1].noncanonical=false
                                   }

       for (i=0;i<genchar.length;i++)
           {
              //alert ('Subsymmetry ('+genchar[i].sop.length+'): '+genchar[i].name+'\n'+genchar[i].irred+"\n"+genchar[i].sop[0]+': '+genchar[i].chars[0]+'\n'+genchar[i].sop[1]+': '+genchar[i].chars[1]+'\n'+genchar[i].sop[2]+': '+genchar[i].chars[2])
           }


       genchar = calc_symmetry_reduction(genchar)

       show_subgroup_table (genchar)
    }


function make_subgroup (grpname)
    {
       var naxis,sg,l
       //if (grpname.match(/[OT][hd]?$/)) { make_subgroup_oct();return}
       naxis=parseInt(grpname.match(/[1-9][0-9]*/))
       var sgroups = new Array()

       
       for (i=1;i<group.nclass;i++) 
          {
             if (!group.sop[i].match(/(sup|σ|′|″)/i))
                {
                    sg = group.sop[i].replace(/<[^<>]*>/g,"").replace(/^[0-9 ]*/,"").replace (/i0/,"S2") //.replace(/S([0-9]*[13579])/,"C$1h")
                    if (sg != grpname && !sg.match(/S[0-9]*[13579]$/)) sgroups[sgroups.length]=sg
                }
          }
       l=sgroups.length
       for (i=0; i<l; i++)
          {
             n=parseInt(sgroups[i].match(/[0-9]+/))
             if (sgroups[i].charAt(0)=="C")
                {
                    if (grpname.match(/C[0-9]+v/) && grpname != (sg=sgroups[i]+"v")) sgroups[sgroups.length]=sg  // Cnv -> Cmv
                    if (grpname.match(/C[0-9]+h/) && grpname != (sg=sgroups[i]+"h")) sgroups[sgroups.length]=sg  // Cnh -> Cmh
                    if (grpname.match(/D[0-9]+/) && grpname != (sg=sgroups[i].replace(/C/,"D").replace(/[dh]/,""))) sgroups[sgroups.length]=sg // Dn* -> Dm
                    if (grpname.match(/D[0-9]+[hd]/) && grpname != (sg=sgroups[i].replace(/C([0-9]+)/,"C$1v"))) sgroups[sgroups.length]=sg // Dn[hd] -> Cmv
                    if (grpname.match(/D[0-9]+h/) && grpname != (sg=sgroups[i].replace(/C/,"D")+"h")) sgroups[sgroups.length]=sg // Dnh -> Dmh
                    //if (grpname.match(/D[0-9]+h/) && grpname != (sg=sgroups[i].replace(/C/,"D")+"h") && sg != "D2h" && is_even(n) && !is_even(n/2) ) sgroups[sgroups.length]=sg+"pp" // Dnh -> Dmh
                    if (grpname.match(/D[0-9]+h/) && grpname != (sg=sgroups[i]+"h")) sgroups[sgroups.length]=sg  // Dnh -> Cmh
                    //if (grpname.match(/D[0-9]+d/) && grpname != (sg=sgroups[i].replace(/C/,"D")+"d")) sgroups[sgroups.length]=sg
                    if (grpname.match(/D[0-9]+d/) && grpname != (sg=sgroups[i].replace(/C/,"D")+"d") )
                       {
                          var x1=parseInt(group.grpname.match(/[0-9]+/))
                          var x2=parseInt(sgroups[i].match(/[0-9]+/))
                          if (!is_even(x1/x2)) sgroups[sgroups.length]=sg
                       }
                }
              else if (sgroups[i].charAt(0)=="S")
                {
                   nh=parseInt(sgroups[i].match(/[0-9]+/))/2
                   if (grpname.match(/D[0-9]+h/) && is_integer(nh) && nh>1) sgroups[sgroups.length]='D'+nh+"d" // Dnh -> D(m/2)d
                   //if (grpname.match(/D[0-9]+d/) && is_even(nh) && grpname != (sg="D"+(n/2)+"d")) sgroups[sgroups.length]=sg // Dnd -> Dmd
                   //if (grpname.match(/[CD][0-9]+h/) && is_even(n) && n>1 && grpname != (sg="xC"+n+"h")) sgroups[sgroups.length]=sg  // Xnh -> Cmh, m even
                }
          }


       if (sgroups.length==0) 
          {
             document.getElementById("subgrouppar").innerHTML="This group has no subgroups to speak of."; 
             document.getElementById("glance_sgroup").innerHTML="None"; 
             if (esg=document.getElementById("subgroup") )
                {
                   esg.innerHTML='<P>This group has no nontrivial subgroup, <I>i.&thinsp;e.</I>, no subgroups besides <A href="C1.html">C<SUB>1</SUB></A> and itself.'; 
                   esg.style.display='' ;
                }
             return
          }

       if (grpname.match(/C[0-9]*v/)) sgroups[sgroups.length]="C1hy"
       if (grpname.match(/C[0-9]*[02468]v/)) sgroups[sgroups.length]="C1hx"
       if (grpname.match(/D[0-9]+d/)) sgroups[sgroups.length]="C1hx"
       if (grpname.match(/[CD][0-9]*h/)) sgroups[sgroups.length]="C1h"
       if (grpname.match(/D[0-9]*/)) sgroups[sgroups.length]="C2x"
       if (grpname.match(/D[0-9]*[02468]h?$/)) sgroups[sgroups.length]="C2y"
       if (grpname.match(/D[0-9]*h/)) sgroups[sgroups.length]="C1hy"
       if (grpname.match(/D[0-9]*[02468]h$/)) sgroups[sgroups.length]="C1hx"
       //if (grpname.match(/D[0-9]*h/)) sgroups[sgroups.length]="D1h"
       //if (grpname.match(/D[0-9]*[02468]h/)) sgroups[sgroups.length]="D1d"
       //if (grpname.match(/D[0-9]*[13579]d/)) sgroups[sgroups.length]="D1d"
       if (grpname.match(/D[0-9]*[02468]h/)) sgroups[sgroups.length]="C2vy"
       if (grpname.match(/D[0-9]*[02468]h/)) sgroups[sgroups.length]="C2vz"
       if (grpname.match(/C[0-9]*[02468]v/) && group.grpname!="C2v") sgroups[sgroups.length]="C2vz"
       if (grpname.match(/D[0-9]*[02468][h]?$/) && grpname!="D2") sgroups[sgroups.length]="D2y"
       if (grpname.match(/D[0-9]*[02468][h]$/) && grpname!="D2h") sgroups[sgroups.length]="D2hy"
       if (grpname.match(/D[0-9]*[02468][h]$/) && grpname!="D2h") sgroups[sgroups.length]="D2hx"
       if (grpname.match(/D[0-9]*[02468][h]?$/) && grpname!="D2" && grpname!="D2") sgroups[sgroups.length]="D2x"  
       //if (grpname.match(/D[0-9]*[02468][h]?$/) && grpname!="D2h" && grpname!="D2" && is_even(x/2)) sgroups[sgroups.length]="D2x"  
       if (grpname.match(/D[0-9]*[02468][h]$|D[0-9]*[13579]d/)) sgroups[sgroups.length]="C2hx"
       if (grpname.match(/D[0-9]*[02468][h]$/)) sgroups[sgroups.length]="C2hy"
       if (grpname.match(/D[0-9]+[h]$/)) sgroups[sgroups.length]="C2vx"
       //if (grpname.match(/D[0-9]*[02468][h]$/)) sgroups[sgroups.length]=grpname.replace(/D([0-9]*[02468])[h]$/,"C$1vxy")

       sgroups[sgroups.length]="C1"

       var sorti=new Array
       var dbg=false
       genchar.S2nresorted=false
       for (i=0; i<sgroups.length; i++)
           {
               sorti[i]=new Array()
                 // sorti[0] : n
                 // sorti[1] : 3 for Dnx, 2 for Cnx, 1 for Sn; note Sn changes below
                 // sorti[2] : 4 for Dnd, 3 for Xnh, 2 for Cnv, 1 for Xn
               sorti[i][0] = parseFloat (sgroups[i].replace(/[SDC]([0-9]*)[vdh]?[xyz]*/,"$1"))   
               sorti[i][1] = parseFloat (sgroups[i].replace(/S[0-9]*[13579]$/,"1").replace(/S[0-9]*[24680]$/,"1").replace(/D.*/,"3").replace(/C.*/,"2"))
               sorti[i][2] = parseFloat (sgroups[i].replace(/[SDC][0-9]*d/,"4").replace(/[SDC][0-9]*h[xyz]*/,"3").replace(/C[0-9]*v[xyz]*/,"2").replace(/S[0-9]*[13579]$/,"3.5").replace(/[SCD][0-9]*[xyz]*$/,"1"))

               if (sgroups[i].match(/S[0-9]*[24680]$/) && group.grpname.match(/D[0-9]+/) && (false || sgroups.toString().match ("D"+(parseInt(sgroups[i].replace(/S([0-9]*[24680])$/,"$1"))/2)+"d")))
                     {
                         //sorti[i][0] /= 2; sorti[i][1]=3; sorti[i][2]=0.5  // S2n after all Dnx
                         sorti[i][0] /= 2; sorti[i][1]=3; sorti[i][2]=3.5  // S2n after Dnd
                         genchar.S2nresorted=true
                     }
               if (sgroups[i].match(/x/)) sorti[i][2]-=0.1
               if (sgroups[i].match(/y/)) sorti[i][2]-=0.2
               if (sgroups[i].match(/z/)) sorti[i][2]-=0.05
               if (sgroups[i] == "S2") sorti[i][0]=0
               if (sgroups[i] == "C1hy") sorti[i][2]=2.9
               if (sgroups[i] == "C1hx") sorti[i][2]=2.8
               if (sgroups[i] == "C1") sorti[i]=[0,0,0]
               if (dbg) console.log (sgroups[i]+" "+sorti[i])
           }

       for (i=0;i<sgroups.length-1;i++)
           {
              var h=0,x
              for (j=i+1;j<sgroups.length;j++)
                  {
                     if (sorti[i][0] != sorti[j][0] ) h = (sorti[i][0] > sorti[j][0])?i:j
                      else if (sorti[i][1] != sorti[j][1] ) h = (sorti[i][1] > sorti[j][1])?i:j
                      else  h = (sorti[i][2] > sorti[j][2])?i:j
                      //console.log (i+" "+sgroups[i]+" "+sorti[i]+"   "+j+" "+sgroups[j]+" "+sorti[j]+"   h="+h)
                      x=sgroups[i] ; sgroups[i]=sgroups[h]; sgroups[h]=x
                      x=sorti[i] ; sorti[i]=sorti[h]; sorti[h]=x
                  }
           }

       // Doubles?
       for (i=sgroups.length-2;i>=0;i--) {if (sgroups[i] == sgroups[i+1]) {if (window.location.href.match(/file:\/\//)) alert ("Madonna Puttana!\n"+sgroups[i]+" double.");sgroups.remove(i+1)}}

    
       

       genchar.noncanonical=0
       genchar.ignoreme=0
       genchar.rotated=false
       var ii=0
       for (i=0;i<sgroups.length;i++)
           {
              //console.log (sgroups[i]+" "+sorti[i])
              genchar[ii]= make_generators (sgroups[i])
              if (genchar[ii].noncanonical) genchar.noncanonical++
              var x=parseInt((group.grpname.match(/[0-9]+/)))
              var y=parseInt((sgroups[i].match(/[0-9]+/)))
              if (group.grpname.match(/[CD][0-9]*[02468][hv]$/) && is_odd(x/2) && genchar[ii].name.match(/C2v$/) && genchar[ii].noncanonical && genchar[ii].sop[0]=="C2" && genchar[ii].sop[1]=="σd" ) genchar[ii].ignoreme=true
              if (genchar[ii].name.match(/D2h?$/) && genchar[ii].noncanonical && genchar[ii].sop[0]=="C2′") genchar[ii].ignoreme=true
              if (genchar[ii].name.match(/D2h?$/) && genchar[ii].noncanonical && genchar[ii].sop[1]=="C2″" && is_odd (x/2)) genchar[ii].ignoreme=true
              if (genchar[ii].ignoreme) genchar.ignoreme++
              if (genchar[ii].name.match(/D[0-9]+d$/) && is_even(x/y/2)) genchar[ii].sop[1]="σv"
              if (dbg) console.log ("Subsymmetry: "+genchar[ii].name+"   sop="+genchar[ii].sop+"\n     "+genchar[ii].sop[0]+": "+genchar[ii].chars[0]+ (genchar[ii].sop[1]? "\n     "+genchar[ii].sop[1]+": "+genchar[ii].chars[1]:"") +" noncan,ignore="+genchar[ii].noncanonical+" "+genchar[ii].ignoreme)
              ii++
              if ((x!=y) && y>1 && is_even(x/y) && sgroups[i]!="C2v" && (group.grpname.match (/C[0-9]*[02468]v/) || group.grpname.match (/D[0-9]*[02468]h/)) && sgroups[i].match (/C[0-9]+v$/))
                 {
                    genchar[ii]= make_generators (sgroups[i])
                    genchar[ii].sop[1]='σd'
                    genchar[ii].noncanonical=true
                    genchar.noncanonical++
                    genchar[ii].killme=true
                    genchar[ii].ori=make_ori (group.grpname, genchar[ii])
                    genchar[ii].ignoreme=is_odd(x/y)
                    genchar[ii].rotated=is_even(x/y)
                    if (genchar[ii].ignoreme) genchar.ignoreme++
                    if (dbg) console.log ("Added1: "+genchar[ii].name+"   sop="+genchar[ii].sop+"\n     "+genchar[ii].sop[0]+": "+genchar[ii].chars[0]+ (genchar[ii].sop[1]? "\n     "+genchar[ii].sop[1]+": "+genchar[ii].chars[1]:"") +" noncan,ignore="+genchar[ii].noncanonical+" "+genchar[ii].ignoreme)
                    ii++

                 }
              if ((x!=y) && (y>2||sgroups[i]=="D2d"||(sgroups[i]=="Dx2"&&group.grpname.match(/D[0-9]*[02468]$/))) && (group.grpname.match (/D[0-9]*[02468]h?$/)) && is_even(x/y) && sgroups[i].match (/D[0-9]+[dh]?$/))
                 {
                    genchar[ii]= make_generators (sgroups[i])
                    genchar[ii].sop[1]='C2″'
                    genchar[ii].sop[1]= sgroups[i].match (/D[0-9]*[13579][hd]$/) ? 'σd' : "C2″"
                    if (sgroups[i].match (/D[0-9]+d$/)) genchar[ii].sop[1]=(is_odd(x/y/2)?'σv':"σd")
                    genchar[ii].noncanonical=true
                    genchar.noncanonical++
                    genchar[ii].killme=true
                    genchar[ii].ignoreme=is_odd(x/y) 
                    genchar[ii].rotated=is_even(x/y) 
                    if (genchar[ii].ignoreme) genchar.ignoreme++
                    genchar[ii].ori=make_ori (group.grpname, genchar[ii])
                    if (dbg) console.log ("Added2: "+genchar[ii].name+"   sop="+genchar[ii].sop+"\n     "+genchar[ii].sop[0]+": "+genchar[ii].chars[0]+ (genchar[ii].sop[1]? "\n     "+genchar[ii].sop[1]+": "+genchar[ii].chars[1]:"") +" noncan,ignore="+genchar[ii].noncanonical+" "+genchar[ii].ignoreme)
                    ii++
                 }
           }

        for (i=0; i<genchar.length;i++) {if (genchar[i].rotated && genchar[i].ignoreme) genchar[i].rotated=false}

        // add ori for regular subgroups if necessary
        var x=parseInt(group.grpname.match(/[0-9]+/)) 
        for (i=0; i<genchar.length-1;i++) 
           {
              var y=parseInt(genchar[i].name.match(/[0-9]+/))
              if (genchar[i].name == genchar[i+1].name && genchar[i].ori == "" && !genchar[i].killme)
                 {
                    if (genchar[i].name=="C1h") genchar[i].ori="xy"
                     else if (genchar[i].name.match(/D[0-9]*$/)) genchar[i].ori=(is_even(x/2))?"z,x|y":"z,x"
                     else if (genchar[i].name.match(/D[0-9]*[02468]h$/)) genchar[i].ori=(is_even(x/2))?"z,x|y":"z,x"
                     else if (genchar[i].name.match(/D[0-9]*h$/)) genchar[i].ori=(is_even(x/2))?"z,xz|yz":"z,xz"
                     else if (genchar[i].name=="D2h") genchar[i].ori="z,x"
                     else if (genchar[i].name=="C2v") genchar[i].ori=(is_even(x/2))?"z,xz|yz":"z,xz"  
                     else if (genchar[i].name=="C2") genchar[i].ori="z"
                     else if (genchar[i].name=="C2h") genchar[i].ori="z"
                     //else if (genchar[i].name.match(/D[0-9]*[13579]d$/) && group.grpname.match(/D[0-9]*[02468]h/)) genchar[i].ori="z,yz"
                     else if (genchar[i].name.match(/D[0-9]+d?$/) && group.grpname.match(/D[0-9]*[02468]h/) && is_odd(x/2) && is_even (x/y)) genchar[i].ori="z,yz"
                     else if (genchar[i].name.match(/D[0-9]+d?$/) && group.grpname.match(/D[0-9]*[02468]h/)) genchar[i].ori="z,&pi;/"+2*y   // baustelle
                     else if (genchar[i].name.match(/D[0-9]+h?$/)) genchar[i].ori="z,x"
                     else if (genchar[i].name.match(/C[0-9]+v$/)) genchar[i].ori=(is_even(x/2))?"z,xz|yz":"z,xz"
                 }
               else if (group.grpname.match(/[DC][0-9]+[hv]/) && genchar[i].name.match(/C[0-9]*v/) && x>3 && is_even(x) && !genchar[i].ori && is_odd(x/y) && x>y && x>y)
                 {
                    genchar[i].ori='z,xz|yz'
                    ////console.log ("Extra group "+genchar[i].name+" labelled with .ori="+genchar[i].ori)
                 }
               else if (group.grpname.match(/[D][0-9]+h?$/) && genchar[i].name.match(/D[0-9]*h?$/) && x>3 && is_even(x) && !genchar[i].ori && is_odd(x/y) && x>y)
                 {
                    genchar[i].ori='z,x|y'
                    //console.log ("Extra group "+genchar[i].name+" labelled with .ori="+genchar[i].ori)
                 }
            }

         for (i=0; i<genchar.length;i++)
           {
               if (dbg) console.log (i+" "+genchar[i].name+" "+genchar[i].sop)
           }

         genchar = calc_symmetry_reduction(genchar)
         show_subgroup_table( genchar)
         //show_subgroup_table (genchar)
    }


function make_generators (grplabel)
   {
        var sgroup=new Object()
        var i,j,k,j1,j2
        sgroup.name=grplabel
        sgroup.sop=new Array()
        sgroup.angle=new Array()
        sgroup.chars=new Array()
        sgroup.irred=new Array()
        sgroup.ori=""
        sgroup.unique=1

        var pi=4*Math.atan(1)
        var naxis=parseInt(sgroup.name.replace(/[SDC]([0-9]*)[hvd]*/,"$1"))
        var octa=group.grpname.match(/[TO][hd]?/)

        if (sgroup.name.match(/C1hyz$/) || sgroup.name.match(/C1hx$/)  )   // Cs with σd plane. Only  even groups. Plane is yz for 6,10,14,… (x+y)z for 4,12,20,…
           {
               var x
               sgroup.chars[0]=new Array(); sgroup.chars[0]=[1,-1]
               sgroup.irred=["A′","A″"]
               sgroup.angle=[-2*pi]
               sgroup.sop=["σd"]
               sgroup.name="C1h"
               sgroup.noncanonical=true
               sgroup.ori=make_ori(group.grpname,sgroup)
               sgroup.rotated=true
           }
         else if (sgroup.name.match(/C1hxz$/) || sgroup.name.match(/C1hy$/)  )   // Cs with σv (xz) plane
           {
               sgroup.chars[0]=new Array(); sgroup.chars[0]=[1,-1]
               sgroup.irred=["A′","A″"]
               sgroup.angle=[-2*pi]
               sgroup.sop=["σv"]
               sgroup.name="C1h"
               sgroup.noncanonical=true
               sgroup.ori=make_ori(group.grpname,sgroup)
           }
         else if (sgroup.name.match(/D2hx$/) )   // D2h with C2,C2",i (y or twisted) axis, only D(2n)h
           {
               sgroup.chars[0]=new Array(); sgroup.chars[0]=[1,1,-1,-1,1,1,-1,-1]
               sgroup.chars[1]=new Array(); sgroup.chars[1]=[1,-1,-1,1,1,-1,-1,1]
               sgroup.chars[2]=new Array(); sgroup.chars[2]=[1,1,1,1,-1,-1,-1,-1]
               sgroup.chars[3]=new Array(); sgroup.chars[3]=[1,-1,1,-1,1,-1,1,-1]
               sgroup.irred=["Ag", "B1g","B2g","B3g", "Au", "B1u","B2u","B3u"]
               sgroup.angle=[pi,pi,-pi,pi]
               sgroup.name="D2h"
               sgroup.noncanonical=true
               var x=parseInt(group.grpname.match(/[0-9]+/))
               if (parseInt(x/4)*4!=x) sgroup.unique=0
               if (parseInt(x/4)*4==x) sgroup.sop=["C2","C2″","i","C2″"]
                  else sgroup.sop=["C2","C2″","i","C2′"]
               sgroup.ori=make_ori(group.grpname,sgroup)
               sgroup.rotated=true
           }
         else if (sgroup.name.match(/D2hy$/) )   // D2h with C2',C2',i (x,y) axis, only D(2n)h
           {
               sgroup.chars[0]=new Array(); sgroup.chars[0]=[1,1,-1,-1,1,1,-1,-1]
               sgroup.chars[1]=new Array(); sgroup.chars[1]=[1,-1,-1,1,1,-1,-1,1]
               sgroup.chars[2]=new Array(); sgroup.chars[2]=[1,1,1,1,-1,-1,-1,-1]
               sgroup.chars[3]=new Array(); sgroup.chars[3]=[1,-1,1,-1,1,-1,1,-1]
               sgroup.irred=["Ag", "B1g","B2g","B3g", "Au", "B1u","B2u","B3u"]
               sgroup.angle=[pi,pi,-pi,pi]
               sgroup.name="D2h"
               sgroup.noncanonical=true
               sgroup.unique=0
               var x=parseInt(group.grpname.match(/[0-9]+/))
               if (parseInt(x/4)*4==x) sgroup.sop=["C2′","C2′","i","C2"]
                  else sgroup.sop=["C2′","C2″","i","C2"]
               sgroup.ori=make_ori(group.grpname,sgroup)
           }
         else if (sgroup.name.match(/D2x$/) )   // D2 with C2,C2'' (x+y) axis, only D(4n)
           {
               sgroup.chars[0]=new Array(); sgroup.chars[0]=[1,1,-1,-1]
               sgroup.chars[1]=new Array(); sgroup.chars[1]=[1,-1,-1,1]
               sgroup.chars[2]=new Array(); sgroup.chars[2]=[1,-1,1,-1]
               sgroup.irred=["A", "B1","B2","B3"]
               sgroup.angle=[pi,pi,pi]
               sgroup.name="D2"
               sgroup.noncanonical=true
               var x=parseInt(group.grpname.match(/[0-9]+/))
               if (parseInt(x/4)*4==x) sgroup.sop=["C2","C2″","C2″"]
                  else sgroup.sop=["C2","C2″","C2′"]
               sgroup.ori=make_ori(group.grpname,sgroup)
               sgroup.rotated=true
           }
         else if (sgroup.name.match(/C1$/) )   // C1 is a special case
           {
               sgroup.chars[0]=new Array(); sgroup.chars[0]=[1]
               sgroup.irred=["A"]
               sgroup.angle=[2*pi]
               sgroup.name="C1"
               sgroup.unique=1
               sgroup.killme=true
               sgroup.sop=["E"]
               sgroup.ori=""
           }
         else if (sgroup.name.match(/D2y$/) )   // D2 with C2',C2' (y or x+y) axis, only D(2n), D(2h)h
           {
               sgroup.chars[0]=new Array(); sgroup.chars[0]=[1,1,-1,-1]
               sgroup.chars[1]=new Array(); sgroup.chars[1]=[1,-1,-1,1]
               sgroup.chars[2]=new Array(); sgroup.chars[2]=[1,-1,1,-1]
               sgroup.irred=["A", "B1","B2","B3"]
               sgroup.angle=[pi,pi,pi]
               sgroup.name="D2"
               sgroup.unique=0
               sgroup.noncanonical=true
               var x=parseInt(group.grpname.match(/[0-9]+/))
               if (parseInt(x/4)*4==x) sgroup.sop=["C2′","C2′","C2"]
                  else sgroup.sop=["C2′","C2″","C2"]
               sgroup.ori=make_ori(group.grpname,sgroup)
           }
         else if (sgroup.name.match(/C2hx$/) )   // C2h with C2' (x) axis, only D(2n)h, D(2n+1)d
           {
               sgroup.chars[1]=new Array(); sgroup.chars[1]=[1,1,-1,-1]
               sgroup.chars[0]=new Array(); sgroup.chars[0]=[1,-1,1,-1]
               sgroup.irred=["Ag", "Bg","Au","Bu"]
               sgroup.angle=[pi,-pi]
               sgroup.sop=["C2′","i"]
               sgroup.name="C2h"
               sgroup.noncanonical=true
               sgroup.ori=make_ori(group.grpname,sgroup)
           }
         else if (sgroup.name.match(/C2hy$/) )   // C2h with C2'' (y, x+y) axis, only D(2n)h
           {
               sgroup.chars[1]=new Array(); sgroup.chars[1]=[1,1,-1,-1]
               sgroup.chars[0]=new Array(); sgroup.chars[0]=[1,-1,1,-1]
               sgroup.irred=["Ag", "Bg","Au","Bu"]
               sgroup.angle=[pi,-pi]
               sgroup.sop=["C2″","i"]
               sgroup.name="C2h"
               sgroup.noncanonical=true
               sgroup.rotated=true
               sgroup.ori=make_ori(group.grpname,sgroup)
           }
         else if (sgroup.name.match(/C2vz$/) )   // C2v with C2 (z) axis and sigma-d, C(2n)v
           {
               sgroup.chars[0]=new Array(); sgroup.chars[0]=[1,1,-1,-1]
               sgroup.chars[1]=new Array(); sgroup.chars[1]=[1,-1,1,-1]
               sgroup.irred=["A1", "A2","B1","B2"]
               sgroup.angle=[pi,-2*pi]
               sgroup.sop=["C2","σd"]
               sgroup.name="C2v"
               sgroup.rotated=true
               sgroup.noncanonical=true
               sgroup.ori=make_ori(group.grpname,sgroup)
           }
         else if (sgroup.name.match(/C2vx$/) )   // C2v with C2' (x) axis, only Dnd
           {
               sgroup.chars[0]=new Array(); sgroup.chars[0]=[1,1,-1,-1]
               sgroup.chars[1]=new Array(); sgroup.chars[1]=[1,-1,1,-1]
               sgroup.irred=["A1", "A2","B1","B2"]
               sgroup.angle=[pi,-2*pi]
               sgroup.sop=["C2′","σh"]
               sgroup.name="C2v"
               sgroup.noncanonical=true
               sgroup.ori=make_ori(group.grpname,sgroup)
           }
         else if (sgroup.name.match(/C2vy$/) )   // C2v with C2'' (y) axis, only D2nh
           {
               sgroup.chars[0]=new Array(); sgroup.chars[0]=[1,1,-1,-1]
               sgroup.chars[1]=new Array(); sgroup.chars[1]=[1,-1,1,-1]
               sgroup.irred=["A1", "A2","B1","B2"]
               sgroup.angle=[pi,-2*pi]
               sgroup.sop=["C2″","σh"]
               sgroup.name="C2v"
               sgroup.noncanonical=true
               sgroup.rotated=true
               sgroup.ori=make_ori(group.grpname,sgroup)
               sgroup.ori=make_ori(group.grpname,sgroup)
           }
         else if (sgroup.name.match(/C2x$/) )   // C2 with C2' (x) axis
           {
               sgroup.chars[0]=new Array(); sgroup.chars[0]=[1,-1]
               sgroup.irred=["A","B"]
               sgroup.angle=[pi]
               sgroup.sop=["C2′"]
               sgroup.name="C2"
               sgroup.noncanonical=true
               sgroup.ori=make_ori(group.grpname,sgroup)
           }
         else if (sgroup.name.match(/C2y$/) )   // C2 with C2'' (y) axis
           {
               sgroup.chars[0]=new Array(); sgroup.chars[0]=[1,-1]
               sgroup.irred=["A","B"]
               sgroup.angle=[pi]
               sgroup.sop=["C2″"]
               sgroup.name="C2"
               sgroup.noncanonical=true
               sgroup.rotated=true
               sgroup.ori=make_ori(group.grpname,sgroup)
           }
         else if (sgroup.name.match(/C2v$/) && group.cubic)   // C2v cubic
           {
               sgroup.chars[0]=new Array(); sgroup.chars[0]=[1,1,-1,-1]
               sgroup.chars[1]=new Array(); sgroup.chars[1]=[1,-1,-1,1]
               sgroup.chars[2]=new Array(); sgroup.chars[2]=[1,-1,1,-1]
               sgroup.irred=["A1","A2","B1","B2"]
               sgroup.angle=[pi,-2*pi,-2*pi]
               if (group.grpname.match("Td")) sgroup.sop=["C2","σd","σd"]
               if (group.grpname.match("Th")) sgroup.sop=["C2","σh","σh"]
               if (group.grpname.match("Oh")) sgroup.sop=["C2","σh","σh"]
               if (group.grpname.match("Ih")) {sgroup.sop=["C2","σ","σ","E"]; sgroup.chars[3]=new Array(); sgroup.chars[3]=[1,1,1,1]; sgroup.angle=[pi,-2*pi,-2*pi, 2*pi]}
           }
         else if (sgroup.name.match(/D2$/) && group.cubic)   // D2 cubic
           {
               sgroup.chars[0]=new Array(); sgroup.chars[0]=[1,1,-1,-1]
               sgroup.chars[1]=new Array(); sgroup.chars[1]=[1,-1,-1,1]
               sgroup.chars[2]=new Array(); sgroup.chars[2]=[1,-1,1,-1]
               sgroup.irred=["A","B1","B2","B3"]
               sgroup.angle=[pi,pi,pi]
               sgroup.sop=["C2","C2","C2"]
               if (group.grpname.match(/[I]/)) { sgroup.chars[3]=new Array(); sgroup.chars[3]=[1,1,1,1]; sgroup.sop=["C2","C2","C2","E"]; sgroup.angle=[pi,pi,pi,2*pi] }
           }
        else if (sgroup.name=="D2")
           {
               sgroup.chars[0]=new Array(); sgroup.chars[0]=[1,1,-1,-1]
               sgroup.chars[1]=new Array(); sgroup.chars[1]=[1,-1,-1,1]
               sgroup.irred=["A","B1","B2","B3"]
               sgroup.angle=[pi,pi]
               sgroup.sop=["C2","C2′"]
           }

         else if (sgroup.name=="D2h")
           {
               sgroup.chars[0]=new Array(); sgroup.chars[0]=[1,1,-1,-1,1,1,-1,-1]
               sgroup.chars[1]=new Array(); sgroup.chars[1]=[1,-1,-1,1,1,-1,-1,1]
               sgroup.chars[2]=new Array(); sgroup.chars[2]=[1,1,1,1,-1,-1,-1,-1]
               sgroup.irred=["Ag","B1g","B2g","B3g", "Au","B1u","B2u","B3u"]
               sgroup.angle=[pi,pi, -pi]
               sgroup.sop=["C2","C2′","i"]
               if (group.grpname.match(/[TOI]/)) { sgroup.chars[3]=new Array(); sgroup.chars[3]=[1,-1,1,-1,1,-1,1,-1]; sgroup.sop=["C2","C2","i","C2"]; sgroup.angle=[pi,pi, -pi, pi] }
           }
         else if (sgroup.name=="C1v" || sgroup.name=="C1h" || sgroup.name=="D1")
          {
               sgroup.chars[0]=new Array(); sgroup.chars[0]=[1,-1]
               if (sgroup.name=="C1v") {sgroup.irred=["A1","A2"]; sgroup.angle[0]=-2*pi; sgroup.sop[0]="σv"}
                else if (sgroup.name=="C1h") {sgroup.irred=["A′","A″"]; sgroup.angle[0]=-2*pi; sgroup.sop[0]="σh"}
                else if (sgroup.name=="D1") {sgroup.irred=["A1","A2"]; sgroup.angle[0]=pi; sgroup.sop[0]="C2′"}
               if (sgroup.name=="C1v" && group.grpname.match(/D[0-9]*d/)) {sgroup.sop[0]="σd"}
               if (group.cubic && (sgroup.name=="D1")) { sgroup.sop[0]="C2" }
               if (group.cubic && (sgroup.name=="C1v")) { sgroup.sop[0]="σd" }
               if (group.cubic && (sgroup.name=="C1v")) { sgroup.sop[0]="σd" }
               if (group.grpname.charAt(0)=="I" && (sgroup.name=="C1h")) { sgroup.sop=["σ","E"]; sgroup.chars[1]=new Array(); sgroup.chars[1]=[1,1]; sgroup.angle[1]=2*pi}
          }
         else if (sgroup.name=="I")
          {
               sgroup.irred=["A","T1","T2","G","H"];  sgroup.angle=[2*pi/5]; sgroup.sop=["C5"]
               sgroup.chars[0]=new Array(); sgroup.chars[0]=[1,(Math.sqrt(5)+1)/2,-(Math.sqrt(5)-1)/2,-1,0]
          }
         else if (sgroup.name=="T")
          {
               sgroup.irred=["A","E","T"];  sgroup.angle=[2*pi/3, pi]; sgroup.sop=["C3","C2"]
               sgroup.chars[0]=new Array(); sgroup.chars[0]=[1,-1,0]
               sgroup.chars[1]=new Array(); sgroup.chars[1]=[1,2,-1]
          }
         else if (sgroup.name=="Th")
          {
               sgroup.irred=["Ag","Eg","Tg","Au","Eu","Tu"];  sgroup.angle=[-2*pi/6, -2*pi]; sgroup.sop=["S6","σh"]
               sgroup.chars[0]=new Array(); sgroup.chars[0]=[1,-1,0,-1,1,0]
               sgroup.chars[1]=new Array(); sgroup.chars[1]=[1,2,-1,-1,-2,1]
               if (group.grpname=="Ih") {sgroup.sop[1]="σ"}// sgroup.angle[2]=-pi; sgroup.sop[2]="i"; sgroup.chars[2]=new Array(); sgroup.chars[2]=[1,2,3,-1,-2,-3]}
          }
         else if (sgroup.name=="Td")
          {
               sgroup.irred=["A1","A2","E","T1","T2"];  sgroup.angle=[2*pi/3, -pi/2]; sgroup.sop=["C3","S4"]
               sgroup.chars[0]=new Array(); sgroup.chars[0]=[1,1,-1,0,0]
               sgroup.chars[1]=new Array(); sgroup.chars[1]=[1,-1,0,1,-1]
          }
         else if (sgroup.name=="O")
          {
               sgroup.irred=["A1","A2","E","T1","T2"];  sgroup.angle=[2*pi/3, pi/2]; sgroup.sop=["C3","C4"]
               sgroup.chars[0]=new Array(); sgroup.chars[0]=[1,1,-1,0,0]
               sgroup.chars[1]=new Array(); sgroup.chars[1]=[1,-1,0,1,-1]
          }

         else if (sgroup.name.match(/S4$/) && group.cubic)   // S(4) cubic
           {
               nax=naxis
               nirred=nax/2+1
               sgroup.sop= [ "S4", "C2" ]
               sgroup.angle=[-2*pi/4, 2*pi/2]
               sgroup.chars[0]=new Array()
               sgroup.chars[1]=new Array()
               sgroup.chars[0]= [1,-1,0]
               sgroup.chars[1]= [1,1,-2]
               sgroup.irred=["A","B","E"]
           }
         else if (sgroup.name.match(/S[0-9]*[02468]$/) && !is_even(naxis/2))   // S(4n+2)
           {
               nax=naxis
               nirred=nax/2+1
               sgroup.sop= [ "S"+nax ]
               sgroup.angle=[-2*pi/nax]
               sgroup.chars[0]=new Array()
               sgroup.chars[0][0]=1; sgroup.chars[0][1]=-1
               sgroup.irred=["Ag","Au"]
               for (i=0; i<(nirred-2)/2; i++)
                   {
                       sgroup.irred[i+2]="E"+(i+1)+"g"
                       sgroup.irred[i+2+(nirred-2)/2]="E"+(i+1)+"u"
                       sgroup.chars[0][i+2]=-2*Math.cos (2*pi/nax*(i+1)) * ((is_even(i)?1:-1) )
                       sgroup.chars[0][i+2+(nirred-2)/2]=2*Math.cos (2*pi/nax*(i+1)) * ((is_even(i)?1:-1) )
                   }
               if (group.grpname.charAt(0)=="I" && sgroup.name!="S2")
                   {
                       sgroup.sop[1]="i"
                       sgroup.angle[1]=-pi
                       sgroup.chars[1]=new Array()
                       sgroup.chars[1]=[1,-1]
                       for (i=0; i<(nirred-2)/2; i++) {sgroup.chars[1][i+2]=2;sgroup.chars[1][i+2+(nirred-2)/2]=-2}
                   }
                else if (group.cubic && sgroup.name=="S6")
                   {
                       sgroup.sop[1]="i"
                       sgroup.angle[1]=-pi
                       sgroup.chars[1]=new Array()
                       sgroup.chars[1]=[1,-1,2,-2]
                   }
           }
         else if (sgroup.name.match(/S[0-9]*[02468]$/) && is_even(naxis/2))   // S(4n)
           {
               nax=naxis
               nirred=nax/2+1
               sgroup.sop= [ "S"+nax ]
               sgroup.angle=[-2*pi/nax]
               sgroup.chars[0]=new Array()
               sgroup.chars[0][0]=1; sgroup.chars[0][1]=-1
               sgroup.irred=["A","B"]
               for (i=2; i<nirred; i++) { sgroup.irred[i]="E"+(i-1); sgroup.chars[0][i]=2*Math.cos (2*pi/nax*(i-1)) }
           }
         else if (sgroup.name.match(/C[0-9]*$/) )   // Cn
           {
               nax=naxis
               nirred=is_even(nax)?nax/2+1:(nax+1)/2
               sgroup.sop= [ "C"+nax ]
               sgroup.angle=[2*pi/nax]
               sgroup.chars[0]=new Array()
               if (is_even(nax)) { sgroup.chars[0][0]=1; sgroup.chars[0][1]=-1; sgroup.irred=["A","B"] }
                else { sgroup.chars[0][0]=1;  sgroup.irred=["A"] }

               l=sgroup.irred.length
               for (i=l; i<nirred; i++) { sgroup.irred[i]="E"+(i-l+1); sgroup.chars[0][i]=2*Math.cos (2*pi/nax*(i-l+1)) }
               if (group.cubic && (sgroup.name=="C4")) { sgroup.sop[1]="C2"; sgroup.angle[1]=pi; sgroup.chars[1]=new Array(); sgroup.chars[1]=[1,1,-2]  }
               if (group.grpname.charAt(0)=="I" && (sgroup.name=="C2"))
                   {
                       sgroup.sop[1]="E"
                       sgroup.angle[1]=2*pi
                       sgroup.chars[1]=new Array()
                       sgroup.chars[1]=[1,1]
                   }
               if (group.grpname.charAt(0)=="I" && (sgroup.name=="C3"))
                   {
                       sgroup.sop[1]="E"
                       sgroup.angle[1]=2*pi
                       sgroup.chars[1]=new Array()
                       sgroup.chars[1]=[1,2]
                   }
           }


         else if (sgroup.name.match(/C[0-9]*v/) || sgroup.name.match(/D[0-9]*$/) )   // Cnv, Dn
           {
               nax=naxis
               nirred=is_even(nax)?nax/2+3:(nax+1)/2+1
               if (sgroup.name.charAt(0) == "C") {sgroup.sop= [ "C"+nax, "σv" ]; sgroup.angle=[2*pi/nax, -2*pi]}
                  else {sgroup.sop= [ "C"+nax, "C2′" ]; sgroup.angle=[2*pi/nax, pi]}
               if (group.grpname.match(/D[0-9]*d/) && sgroup.name.match(/C[0-9]*v/)) 
                  {
                      sgroup.noncanonical=true;sgroup.sop[1]="σd"
                      sgroup.ori=make_ori(group.grpname,sgroup)
                  }
               sgroup.chars[0]=new Array()
               sgroup.chars[1]=new Array()
               if (sgroup.name.match(/C[0-9]+vxy/)) { sgroup.sop[1]="σd"; sgroup.noncanonical=true }
               if (group.cubic && (sgroup.name=="D3")) { sgroup.sop[1]="C2′" }
               if (group.cubic && (sgroup.name=="C3v")) { sgroup.sop[1]="σd" }
               if (group.cubic && (sgroup.name=="C4v")) { sgroup.sop[1]="σh" }
               if (group.cubic && (sgroup.name=="C2v")) { sgroup.sop[1]="σh" }
               if (group.cubic && (sgroup.name=="D4")) { sgroup.sop=["C4","C2","C2"]; sgroup.chars[2]=new Array(); sgroup.angle[2]=pi; sgroup.chars[2]=[1,1,1,1,-2] }

               if (is_even(nax)) { sgroup.chars[0]=[1,1,-1,-1]; sgroup.chars[1]=[1,-1,1,-1]; sgroup.irred=["A1","A2","B1","B2"] }
                else { sgroup.chars[0]=[1,1]; sgroup.chars[1]=[1,-1]; sgroup.irred=["A1","A2"] }

               l=sgroup.irred.length
               for (i=0; i<(nax-l/2)/2; i++) { sgroup.irred[i+l]="E"+(i+1); sgroup.chars[0][i+l]=2*Math.cos (2*pi/nax*(i+1)); sgroup.chars[1][i+l]=0 }
           }

         else if (sgroup.name.match(/C[0-9]*[24680]h/) )   // C(2n)h
           {
               nax=naxis
               nirred=nax+2
               sgroup.sop= [ "C"+nax, "i" ]
               sgroup.angle=[2*pi/nax, -2*pi/2]
               sgroup.chars[0]=new Array()
               sgroup.chars[1]=new Array()
               sgroup.chars[0]=[1,-1,1,-1]; sgroup.chars[1]=[1,1,-1,-1]; sgroup.irred=["Ag","Bg","Au","Bu"] 

               l=sgroup.irred.length
               for (i=0; i<(nax/2-1); i++) 
                  { 
                     sgroup.irred[i+l]="E"+(i+1)+"g"; sgroup.chars[0][i+l]=2*Math.cos (2*pi/nax*(i+1)); sgroup.chars[1][i+l]=2;
                     sgroup.irred[i+l+(nax/2-1)]="E"+(i+1)+"u"; sgroup.chars[0][i+l+(nax/2-1)]=2*Math.cos (2*pi/nax*(i+1)); sgroup.chars[1][i+l+(nax/2-1)]=-2
                  }
               if (group.cubic && (sgroup.name=="C4h")) { sgroup.sop[2]="C2"; sgroup.angle[2]=pi; sgroup.chars[2]=new Array(); sgroup.chars[2]=[1,1,1,1,-2,-2]  }
           }

         else if (sgroup.name.match(/C[0-9]*[13579]h/) )   // C(2n+1)h
           {
               nax=naxis
               nirred=nax+1
               sgroup.sop= [ "S"+nax ]
               sgroup.angle=[-2*pi/nax]
               sgroup.chars[0]=new Array()
               sgroup.chars[0]=[1,-1]; sgroup.irred=["A′","A″"]

               l=sgroup.irred.length
               for (i=0; i<(nax-1)/2; i++)
                  { 
                     sgroup.irred[2*i+l]="E"+(i+1)+"′"; sgroup.chars[0][2*i+l]=2*Math.cos (2*pi/nax*(i+1))
                     sgroup.irred[2*i+l+1]="E"+(i+1)+"″"; sgroup.chars[0][2*i+l+1]=-2*Math.cos (2*pi/nax*(i+1))
                  }
           }

         else if (sgroup.name.match(/D[0-9]*[13579]h/) )   // D(2n+1)h
           {
               nax=naxis
               nirred=nax+1
               sgroup.sop= [ "S"+nax, "σv" ]
               sgroup.angle=[-2*pi/nax, -2*pi]
               sgroup.chars[0]=new Array()
               sgroup.chars[1]=new Array()
               sgroup.chars[0]=[1,-1,1,-1]; sgroup.chars[1]=[1,-1,-1,1];  sgroup.irred=["A1′","A1″","A2′","A2″"]

               l=sgroup.irred.length
               for (i=0; i<(nax-1)/2; i++)
                  { 
                     sgroup.irred[2*i+l]="E"+(i+1)+"′"; sgroup.chars[0][2*i+l]=2*Math.cos (2*pi/nax*(i+1)); sgroup.chars[1][2*i+l]=0
                     sgroup.irred[2*i+l+1]="E"+(i+1)+"″"; sgroup.chars[0][2*i+l+1]=-2*Math.cos (2*pi/nax*(i+1)); sgroup.chars[1][2*i+l+1]=0
                  }
           }

         else if (sgroup.name.match(/D[0-9]*[13579]d/) )   // D(2n+1)d
           {
               nax=naxis*2
               nirred=naxis+3
               sgroup.sop= [ "S"+nax, "σd" ]
               sgroup.angle=[-2*pi/nax, -2*pi]
               sgroup.chars[0]=new Array()
               sgroup.chars[1]=new Array()
               sgroup.chars[0] = [1,1,-1,-1]; sgroup.chars[1]=[1,-1,-1,1]
               if (group.cubic && (sgroup.name=="D3d")) { sgroup.sop=["S6","σd","i"]; sgroup.angle=[-2*pi/nax, -2*pi, -pi]; sgroup.chars[2]=new Array(); sgroup.chars[2]=[1,1,-1,-1,2,-2]}
               sgroup.irred=["A1g","A2g","A1u","A2u"]
               l=sgroup.irred.length
               for (i=0; i<(nirred-l)/2; i++)
                   {
                       sgroup.irred[i+l]="E"+(i+1)+"g"; sgroup.irred[i+l+(nirred-l)/2]="E"+(i+1)+"u"
                       sgroup.chars[0][i+l]=-2*Math.cos (2*pi/nax*(i+1)) * ((is_even(i)?1:-1) ); sgroup.chars[1][i+l]=0
                       sgroup.chars[0][i+l+(nirred-l)/2]=2*Math.cos (2*pi/nax*(i+1)) * ((is_even(i)?1:-1) ); sgroup.chars[1][i+l+(nirred-l)/2]=0
                   }
               if (group.grpname.charAt(0)=="I")
                   {
                       sgroup.sop[2]="i"
                       sgroup.angle[2]=-pi
                       sgroup.chars[2]=new Array()
                       sgroup.chars[2]=[1,1,-1,-1]
                       for (i=0; i<(nirred-l)/2; i++) {sgroup.chars[2][i+l]=2;sgroup.chars[2][i+l+(nirred-l)/2]=-2}
                   }
           }
         else if (sgroup.name.match(/D2d/) && group.cubic )   // D2d for octahedral
           {
               sgroup.sop= [ "S4", "σd", "C2" ]
               sgroup.angle=[-2*pi/4, -2*pi, pi]
               sgroup.chars[0]=new Array()
               sgroup.chars[1]=new Array()
               sgroup.chars[2]=new Array()
               sgroup.chars[0] = [1,1,-1,-1,0]; sgroup.chars[1]=[1,-1,-1,1,0]; sgroup.chars[2]=[1,-1,1,-1,0]
               sgroup.irred=["A1","A2","B1","B2","E"]
           }
         else if (sgroup.name.match(/D[0-9]*[02468]d/) )   // D(2n)d
           {
               nax=naxis*2
               nirred=naxis+3
               sgroup.sop= [ "S"+nax, "σd" ]
               sgroup.angle=[-2*pi/nax, -2*pi]
               sgroup.chars[0]=new Array()
               sgroup.chars[1]=new Array()
               sgroup.chars[0] = [1,1,-1,-1]; sgroup.chars[1]=[1,-1,-1,1]
               sgroup.irred=["A1","A2","B1","B2"]
               l=sgroup.irred.length
               for (i=0; i<(nirred-l); i++)
                   {
                       sgroup.irred[i+l]="E"+(i+1)
                       sgroup.chars[0][i+l]=2*Math.cos (2*pi/nax*(i+1)); sgroup.chars[1][i+l]=0
                   }
           }

         else if (sgroup.name.match(/D[0-9]*[24680]h/) )   // D(2n)h
           {
               nax=naxis
               nirred=nax+2
               sgroup.sop= [ "C"+nax, "C2′", "i" ]
               sgroup.angle=[2*pi/nax, pi, -pi]
               sgroup.chars[0]=new Array()
               sgroup.chars[1]=new Array()
               sgroup.chars[2]=new Array()
               sgroup.chars[0]=[1,1,-1,-1,1,1,-1,-1]; sgroup.chars[1]=[1,-1,1,-1,1,-1,1,-1]; sgroup.chars[2]=[1,1,1,1,-1,-1,-1,-1]
               if (group.cubic) { sgroup.sop[1]="C2" }
               if (group.cubic && sgroup.name=="D4h") { sgroup.sop[3]="C2"; sgroup.angle[3]=pi; sgroup.chars[3]=new Array(); sgroup.chars[3]=[1,1,1,1,1,1,1,1,-2,-2]}
               sgroup.irred=["A1g","A2g","B1g","B2g","A1u","A2u","B1u","B2u"] 

               l=sgroup.irred.length
               for (i=0; i<(nax/2-1); i++) 
                  { 
                     sgroup.irred[i+l]="E"+(i+1)+"g"; sgroup.chars[0][i+l]=2*Math.cos (2*pi/nax*(i+1)); sgroup.chars[1][i+l]=0; sgroup.chars[2][i+l]=2;
                     sgroup.irred[i+l+(nax/2-1)]="E"+(i+1)+"u"; sgroup.chars[0][i+l+(nax/2-1)]=2*Math.cos (2*pi/nax*(i+1)); sgroup.chars[1][i+l+(nax/2-1)]=0; sgroup.chars[2][i+l+(nax/2-1)]=-2
                  }
           }

        for (i=0; i<sgroup.chars.length; i++)
            {
               for (j=0; j<sgroup.chars[i].length; j++)
                   {
                        for (k=-2;k<3;k++) {if (Math.abs(sgroup.chars[i][j]-k) < 1e-15) sgroup.chars[i][j]=k}
                   }
            }

        var m1=0
        var m2=0
        for (i=0; i<sgroup.irred.length; i++) { if (sgroup.irred[i].match(/E1/)) m1++; if (sgroup.irred[i].match(/E[2-9]/)) m2++ }
        if (m1>0&&m2==0) { for (i=0; i<sgroup.irred.length; i++) sgroup.irred[i]=sgroup.irred[i].replace(/E1/,"E") }

        for (i=0; i<sgroup.sop.length; i++) {if (sgroup.sop[i]=="S2") sgroup.sop[i]="i"}
        for (i=0; i<sgroup.sop.length; i++) {if (sgroup.sop[i]=="S1") sgroup.sop[i]="σh"}
        for (i=0; i<sgroup.sop.length; i++) {if (sgroup.sop[i]=="C1") {sgroup.sop.remove(i);sgroup.angle.remove(i)}}

        var l=sgroup.irred.length
        if (group.cubic)
          {
            for (i=0; i<l  ; i++)
                {
                   for (j=i; j<l && !sgroup.irred[i].match(/[T]/) ; j++)
                       {
                           if (sgroup.irred[i].match(/[gu]/) && !(sgroup.irred[i]+sgroup.irred[j]).match(/([gu]).*\1$/)) continue
                           for (k=0; k<sgroup.sop.length;k++) sgroup.chars[k][sgroup.chars[k].length] = sgroup.chars[k][i]+sgroup.chars[k][j]
                           sgroup.irred[sgroup.irred.length]= sgroup.irred[i]+" "+sgroup.irred[j]
                       }
                }
            for (i=0; i<l  ; i++)
               {
                 for (j=i; j<l && !sgroup.irred[i].match(/[TE]/) ; j++)
                    {
                      if (sgroup.irred[i].match(/[gu]/) && !(sgroup.irred[i]+sgroup.irred[j]).match(/([gu]).*\1$/)) continue
                      for (j1=j; j1<l ; j1++)
                         {
                           if (sgroup.irred[j1].match(/[gu]/) && !(sgroup.irred[j1]+sgroup.irred[j]).match(/([gu]).*\1$/)) continue
                           for (k=0; k<sgroup.sop.length;k++) sgroup.chars[k][sgroup.chars[k].length] = sgroup.chars[k][i]+sgroup.chars[k][j]+sgroup.chars[k][j1]
                           sgroup.irred[sgroup.irred.length]= sgroup.irred[i]+" "+sgroup.irred[j]+" "+sgroup.irred[j1]
                         }
                     }
                }
            if (group.grpname.charAt(0)=="I" && sgroup.name.match(/[CSD][12]/))
               {
                   for (i=0; i<l  ; i++)
                      {
                        for (j=i; j<l && !sgroup.irred[i].match(/[TE]/) ; j++)
                           {
                             if (sgroup.irred[i].match(/[gu]/) && !(sgroup.irred[i]+sgroup.irred[j]).match(/([gu]).*\1$/)) continue
                             for (j1=j; j1<l ; j1++)
                                {
                                    if (sgroup.irred[j1].match(/[gu]/) && !(sgroup.irred[j1]+sgroup.irred[j]).match(/([gu]).*\1$/)) continue
                                    for (j2=j1;j2<l;j2++)
                                       {
                                            if (sgroup.irred[j2].match(/[gu]/) && !(sgroup.irred[j2]+sgroup.irred[j]).match(/([gu]).*\1$/)) continue
                                            for (k=0; k<sgroup.sop.length;k++) sgroup.chars[k][sgroup.chars[k].length] = sgroup.chars[k][i]+sgroup.chars[k][j]+sgroup.chars[k][j1]+sgroup.chars[k][j2]
                                            sgroup.irred[sgroup.irred.length]= sgroup.irred[i]+" "+sgroup.irred[j]+" "+sgroup.irred[j1]+" "+sgroup.irred[j2]
                                       }
                                }
                            }
                      }
                   for (i=0; i<l  ; i++)
                      {
                        for (j=i; j<l && !sgroup.irred[i].match(/[TE]/) ; j++)
                           {
                             if (sgroup.irred[i].match(/[gu]/) && !(sgroup.irred[i]+sgroup.irred[j]).match(/([gu]).*\1$/)) continue
                             for (j1=j; j1<l ; j1++)
                                {
                                    if (sgroup.irred[j1].match(/[gu]/) && !(sgroup.irred[j1]+sgroup.irred[j]).match(/([gu]).*\1$/)) continue
                                    for (j2=j1;j2<l;j2++)
                                       {
                                           if (sgroup.irred[j2].match(/[gu]/) && !(sgroup.irred[j2]+sgroup.irred[j]).match(/([gu]).*\1$/)) continue
                                           for (j3=j2;j3<l;j3++)
                                              {
                                                  if (sgroup.irred[j3].match(/[gu]/) && !(sgroup.irred[j3]+sgroup.irred[j]).match(/([gu]).*\1$/)) continue
                                                  for (k=0; k<sgroup.sop.length;k++) sgroup.chars[k][sgroup.chars[k].length] = sgroup.chars[k][i]+sgroup.chars[k][j]+sgroup.chars[k][j1]+sgroup.chars[k][j2]+sgroup.chars[k][j3]
                                                  sgroup.irred[sgroup.irred.length]= sgroup.irred[i]+" "+sgroup.irred[j]+" "+sgroup.irred[j1]+" "+sgroup.irred[j2]+" "+sgroup.irred[j3]
                                              }
                                       }
                                }
                            }
                      }
               }
          }
         else
          {
            for (i=0; i<l && !sgroup.irred[i].match(/^[ET]/)  ; i++)
                {
                   for (j=i; j<l && sgroup.irred[j].match(/[AB]/) ; j++)
                       {
                           if (sgroup.irred[i].match(/[gu]/) && !(sgroup.irred[i]+sgroup.irred[j]).match(/([gu]).*\1$/)) continue
                           for (k=0; k<sgroup.sop.length;k++) sgroup.chars[k][sgroup.chars[k].length] = sgroup.chars[k][i]+sgroup.chars[k][j]
                           sgroup.irred[sgroup.irred.length]= sgroup.irred[i]+" "+sgroup.irred[j]
                       }
                }
          }
    
        //alert (sgroup.name+" irred="+sgroup.irred.length+" "+sgroup.irred)
        var str=""
        //console.log ("\nSubgroup="+sgroup.name+"  "+sgroup.sop)
        for (i=0; i<sgroup.irred.length; i++)
            {
                str="";for (j=0;j<sgroup.sop.length;j++) str+=(sgroup.chars[j][i]+", ")
                //console.log (sgroup.irred[i]+"   "+str)
            }


        sgroup.labels=new Array()
        sgroup.trivial=new Array()

        return sgroup
   }

function calc_symmetry_reduction (subgroups)
   {
        var i,j,k,l,m,n,flag
        var pi=4*Math.atan(1)
        var sopidx=new Array()
        var dbg=false   && (window.location.href.indexOf("file://")>-1)


        for (i=0;i<subgroups.length;i++) 
            {
                 if (dbg) console.log ("\n\nGroup = "+subgroups[i].name+" with generators "+subgroups[i].sop)
                 for (j=0; j<subgroups[i].sop.length; j++) 
                     {
                         for (k=0; k<group.nclass;k++) 
                             {
                                  if (dbg) console.log ('Group #'+k+' sop='+group.sop0[k]+" "+(group.angle[k]/pi*180)+"     Subgroup # "+j+"   sop="+subgroups[i].sop[j]+" "+(subgroups[i].angle[j]/pi*180))
                                  if (group.sop0[k]==subgroups[i].sop[j] && dbg) console.log ("Names match")
                                  if (group.angle[k]==subgroups[i].angle[j] && dbg) console.log ("Angles match")
                                  if (group.sop0[k]==subgroups[i].sop[j] && group.angle[k]==subgroups[i].angle[j]) break
                             }
                         if (k==group.nclass) {if (dbg) console.log ("Vaffanculo, no good match found!")}
                         sopidx[j]=k
                         if (dbg) console.log ("#j="+j+" "+subgroups[i].sop[j]+" will point to sop #k="+k+"  ("+group.sop0[k]+"), chars="+subgroups[i].chars[j]+".")
                     }
                  if (dbg) console.log ("sopidx="+sopidx)
                  for (j=0; j<group.nclass;j++)
                     {
                         for (k=0; k<subgroups[i].irred.length; k++)
                            {
                                  flag=true
                                  for (l=0;l<subgroups[i].sop.length; l++)
                                      {
                                          flag = (Math.abs (subgroups[i].chars[l][k] - group.chartab[j][sopidx[l]])<0.00001) && flag
                                          //flag = ((("E"==group.orig[j].charAt(0)) == ("E"==subgroups[i].irred[k].charAt(0))) || subgroups[i].irred[k].indexOf(" ")>0) && flag
                                          if ("E"==group.orig[j].charAt(0)) flag=("E"==subgroups[i].irred[k].charAt(0) || subgroups[i].irred[k].indexOf(" ")>0) && flag
                                          if ("T"==group.orig[j].charAt(0)) flag=("T"==subgroups[i].irred[k].charAt(0) || subgroups[i].irred[k].match(/[AB]/)&&subgroups[i].irred[k].match(/E/) || subgroups[i].irred[k].match(/^[^ ]* [^ ]* [^ ]*$/)) && flag
                                          if (dbg) console.log ("    Test j(irrep)="+j+"("+group.orig[j]+")  k(irred)="+k+"("+subgroups[i].irred[k]+")  l(sop)"+l+"("+subgroups[i].sop[l]+")  flag="+flag+" chars(subgroup,group)="+subgroups[i].chars[l][k]+" "+group.chartab[j][sopidx[l]])
                                      }
                                  if (flag) break
                            }
                         if (dbg) console.log ("Success, irrep "+j+" ("+group.orig[j]+") is assigned to symmetry "+k+" "+ subgroups[i].irred[k]+".")
                         subgroups[i].labels[j]=subgroups[i].irred[k]
                         subgroups[i].trivial[j]= (subgroups[i].labels[j]+" ").match(new RegExp (subgroups[i].labels[0],"g"))?(subgroups[i].labels[j]+" ").match(new RegExp (subgroups[i].labels[0],"g")).length:0
                         // big error !!  if (group.grpname.match(/D[0-9]*[02468]d/) && subgroups[i].name.match (/D[0-9]*[02468]d/) && subgroups[i].trivial[j] && group.orig[j].charAt(0)=="E") {console.log ("Doubled: "+i+" "+subgroups[i].name+" irrep="+j+" "+group.orig[j]);subgroups[i].trivial[j]*=2}
                         if (subgroups[i].unique==0) subgroups[i].trivial[j]=0
                     }
                   if (dbg) console.log ("Finished, subgroup "+subgroups[i].name+" get labels ="+subgroups[i].labels)
            }


      // Has something gone wrong?

      for (i=0; i<subgroups.length; i++)
         {
            for (j=0; j<group.nclass; j++)
                {
                    if (!subgroups[i].labels[j]) 
                       {
                           if (window.location.href.match(/file:\/\//)) {alert ("Madonna Puttana!\n"+subgroups[i].name+" "+subgroups[i].sop+" is not a subgroup.")}
                           else {subgroups.remove(i); i--} 
                           break
                       }
                }
         }

      calc_distortion_subgroup (subgroups)

      // remove C1 if appropriate
      i=subgroups.length-1
      var dbg=false

      subgroups.trivial=0
      if (subgroups[i].name=="C1" && subgroups[i].killme)
         {
            if (dbg) console.log ("Removed trivial group: "+i+" "+subgroups[i].name+" "+subgroups[i].sop)
            subgroups.remove(i)
         }
       else if (subgroups[i].name=="C1")
         {
            subgroups[i].sop[0]=""
            subgroups.trivial=1
         }


      // remove unused killme subgroups
      subgroups.removed=0
      subgroups.removedgroups=""
      if (true&&group.grpname.match(/[CD][0-9]+[hv]?$/)&&subgroups.length>25)
          {
             for (i=0;i<subgroups.length;i++) 
                 {
                     if (subgroups[i].killme) 
                        {
                            var j,k
                            for (j=0;j<group.nclass;j++) {for (k=0;k<group.distvec.length;k++) if (group.distvec[j] && group.distvec[j][k]>i) group.distvec[j][k]--}
                            if (dbg) console.log ("Removed group: "+i+" "+subgroups[i].name+" "+subgroups[i].sop)
                            subgroups.noncanonical--
                            subgroups.removed++
                            subgroups.removedgroups+=subgroups[i].name+", "
                            j=i-1
                            if (subgroups[j].noncanonical) j--
                            subgroups[j].widow=true
                            subgroups.remove(i)   
                            i--
                        }
                 }
          }
      subgroups.removedgroups=subgroups.removedgroups.replace(/, *$/,"")
      return subgroups
   }

var genchar = new Array ()
function make_subgroup_table (subgroups)
   {
     function no_subgroup() {document.getElementById("glance_sgroup").innerHTML="None"; 
                             document.getElementById("glance_sgroup").colSpan="2"
                             document.getElementById("glance_sgroup").className="glance_td3"
                             document.getElementById("glance_sgroup").nextSibling.colSpan="1"
                             document.getElementById("subgroup").innerHTML=(group.grpname=="C1"?"This group is trivial and therefore has no nontrivial subgroups either.":
                                                                                                "<P>This group has no nontrivial subgroups."); 
                             document.getElementById("subgroup").style.display=""}

     if (group.nclass < 3 || group.grpname.match(/^D1$/)) {no_subgroup(); return}
     if (group.grpname.match(/C[0-9]+$/) && is_prime (parseInt(group.grpname.match(/[0-9]+/)))) {no_subgroup(); return}
     if (group.grpname.match(/^D1[hd]?$/)) {return}
     var hr=document.getElementsByTagName("HR"), str
     e=document.createElement ("HR")
     hr[hr.length-1].parentNode.insertBefore(e,hr[hr.length-1])
     e=document.createElement ("H2")
     hr[hr.length-1].parentNode.insertBefore(e,hr[hr.length-1])
     e.innerHTML="Subgroups and Descent in Symmetry"
     e.id="h_subgroups"
     e.className="stickleft"
     e=document.createElement ("DIV")
     e.innerHTML ='<DIV id=subgroupreplace><P id=subgrouppar>This group is rather large, and the calculation of its subgroups can take some time. <A href="#" onclick="make_subgroup(group.grpname); return false">Click here to start the calculation.</A></DIV>'
     hr[hr.length-1].parentNode.insertBefore(e,hr[hr.length-1])
     var x=25
     if (group.grpname.match(/[SC][0-9]*h?/)) x=60
     if (group.grpname.match(/C[0-9]*v|D[0-9]*$/)) x=40
     if (navigator.appVersion.match(/Safari/) && (parseInt(navigator.appVersion.substring(navigator.appVersion.indexOf("Safari")+7))<533)) x=19
     if (group.grpname.match(/[TO][dh]?/))
        {
         make_subgroup_oct()
        }
      else if (group.grpname.match(/Ih*/))
        {
         make_subgroup_ico()
        }
      else if (group.nclass<x) 
        {
         genchar = make_subgroup(group.grpname)
         //genchar = calc_symmetry_reduction(genchar)
         //show_subgroup_table (genchar)
        }
      else
        {
         document.getElementById("glance_sgroup").innerHTML='<SPAN title="Start the subgroup calculation at the end of the page to have this result calculated">N/A</SPAN>'
        }
   }

function show_subgroup_table (subgroups)
   {
    var e,i,n=1,nlist=", "+subgroups[0].name+", ",nsub=subgroups.length-subgroups.ignoreme+subgroups.removed-subgroups.trivial
    var nlist2="",n2=0,j,nlist2="", nlist3="",n3=0, n4=0, nlist0=new Array(),n0=0,nlist4=""
    if (group.grpname=="O") n--
    if (group.grpname=="Oh") {n-=3;nsub=31}
     e=document.createElement ("DIV")
     var checked=false
     if (group.grpname.match(/D[0-9]*d/)) checked=true
     checked=checked || subgroups.length < 41 || group.cryst
     e.id="subgroupdiv"
     if (subgroups.length)  // subgroup sorting is incorrect for icosahedral stuff, but is then not used anyway.
         {
            for (i=0;i<subgroups.length;i++)
                {
                   if (!subgroups[i].ignoreme && !(subgroups[i].name=="C1"))
                      {
                          nlist0[n0]=subgroups[i].name.replace(/S2$/,"Ci").replace(/C1h/,"Cs"); n0++
                          if(subgroups[i].widow) {nlist0[n0]=nlist0[n0-1]; n0++}
                      }
                }
            //console.log ("n0="+n0+"   "+nlist0+"    nlist0[0]='"+nlist0[0]+"'")
            nlist0[n0]='XX'; n0++ // sentinel
            nlist=nlist0[0]
            for (i=1;i<nlist0.length-1;i++) if (nlist0[i]!=nlist0[i-1]) {n++;nlist+=", "+nlist0[i]}
            //console.log ("n="+n+"   "+nlist)
            var last=0, head=0
            for (i=1;i<n0-1;i++) 
               {
                  if (i>=1 && nlist0[i]!=nlist0[i+1] && nlist0[i]==nlist0[i-1] && (i==1 || nlist0[i-2]!=nlist0[i])) {nlist2+=(nlist0[i]+', '); n2++}
                  if (i>=2 && nlist0[i]!=nlist0[i+1] && nlist0[i]==nlist0[i-1] && nlist0[i]==nlist0[i-2] && (i==2 || nlist0[i-3]!=nlist0[i])) {nlist3+=(nlist0[i]+', '); n3++}
                  if (i>=3 && nlist0[i]!=nlist0[i+1] && nlist0[i]==nlist0[i-1] && nlist0[i]==nlist0[i-2] && nlist0[i]==nlist0[i-3] && (i==3 || nlist0[i-4]!=nlist0[i])) {nlist4+=(nlist0[i]+', '); n4++}
               }
         }
     //console.log ("n2="+n2+"   "+nlist2)
     //console.log ("n3="+n3+"   "+nlist3)
     //console.log ("n4="+n4+"   "+nlist4)
     if (nlist)  nlist=nlist.replace(/S2,/,"Ci,").replace(/C1h,/,"Cs,").replace(/([SCD])([0-9]*)([hsidv]*)/g,'<A href="$1$2$3.html">$1<SUB>$2$3</SUB></A>').replace(/^ *,/,"").replace(/, *$/,"").replace(/Cs.html/, "C1h.html").replace(/Ci.html/,"S2.html").replace(/, *$/,"")
     if (nlist2) nlist2=nlist2.replace(/([SCD])([0-9]*)([hsidv]*)/g,' $1<SUB>$2$3</SUB>').replace(/^ *,/,"").replace(/, *$/,"")
     if (nlist3) nlist3=nlist3.replace(/([SCD])([0-9]*)([hsidv]*)/g,' $1<SUB>$2$3</SUB>').replace(/^ *,/,"").replace(/, *$/,"")
     if (nlist4) nlist4=nlist4.replace(/([SCD])([0-9]*)([hsidv]*)/g,' $1<SUB>$2$3</SUB>').replace(/^ *,/,"").replace(/, *$/,"")
     //if (nlist2)  nlist2=nlist2.replace(/S2,/,"Ci,").replace(/C1h,/,"Cs,").replace(/([SCD])([0-9]*)([hsidv]*)/g,' $1<SUB>$2$3</SUB>').replace(/^ *,/,"").replace(/, *$/,"")
     if (subgroups.length && group.grpname.match(/[TI]/)) document.getElementById("glance_sgroup").innerHTML=n
     document.getElementById("sgrouptitle").title="Only nontrivial subgroups are counted here"
     var lab=""
     var eli=document.getElementById("noteslist").getElementsByTagName("LI")
     var e1=document.getElementById("glance_sgroup")
     for (i=1;i<eli.length;i++) { if (eli[i].id=="subgroup") lab="αβγδεζηθικλμνξο".charAt(i) }

     if (subgroups.length && group.grpname.match(/[DSCO]/)) 
        {
            if (n==nsub) {e1.innerHTML=n}
              else
               {
                 e1.innerHTML=nsub+", <SPAN title='See point "+lab+"'>unique "+n+'</SPAN>'
                 e1.colSpan="3"
                 e1.parentNode.removeChild(e1.nextSibling)
                 e1.className="glance_td2"
               }
        }

     if (subgroups.length && (esg=document.getElementById("subgroup")) && group.grpname.match(/[CSD]/))
        {
            if (group.grpname=="D2") {esg.innerHTML= '<P>The D<SUB>2</SUB> group has three nontrivial subgroups, all of which are of <A href="C2.html">C<SUB>2</SUB></A> type.'}
              else if (group.grpname=="D2h") {esg.innerHTML= "<P>The D<SUB>2h</SUB> group has "+number(nsub)+" distinct nontrivial subgroups of "+number(n)+" different kinds: " +nlist+". "+number(n3,true)+" subgroups appear in three different orientations each: "+nlist3+". "}
              else if (subgroups.length-subgroups.trivial==1) {esg.innerHTML= "<P>The "+group.grpname.replace(/([SCD])([0-9])*([hsidv]*)/g, '$1<SUB>$2$3</SUB>')+" group has only one nontrivial subgroup, "+nlist+"."}
              else if (n>1 && n<subgroups.length-subgroups.trivial) 
                  {
                      var str="<P>The "+group.grpname.replace(/([SCD])([0-9]*)([hsidv]*)/g, '$1<SUB>$2$3</SUB>')+" group has "+number(nsub)+" distinct nontrivial subgroups of "+number(n)+" different kinds: " +nlist+". "
                      if (n2==1 && n3==0) str+="The "+nlist2+" subgroup appears in two different orientations. "
                      if (n2==1 && n3>0 ) str+="The "+nlist2+" subgroup appears in two different orientations, and the "+nlist3+" subgroup"+(n3==1?"":"s")+" appear"+(n3==1?"s":"")+" in three different orientations."
                      if (n2>1 && n2>1 && (n3+n4)==0) str+= number(n2,true)+" subgroups appear each in two different orientations: "+nlist2+"."
                      if (n2>1 && (n3+n4)>0) str+=" "+number(n2+n3+n4,true)+" subgroups appear in more than one orientation, namely "+nlist2+" (two orientations each)"
                      if (n2>1 && n3==1) str+=(n4>0?", ":" and ")+nlist3+" (three orientations)"+(n4>0?", ":". ")
                      if (n2>1 && n3>1) str+=(n4>0?", ":" and ")+nlist3+" (three orientations each)"+(n4>0?", ":". ")
                      if (n4) str+="and there are four distinctly oriented "+nlist4+" subgroups."
                      esg.innerHTML=str
                  }
              else if (n>1 && n==subgroups.length-subgroups.trivial && group.grpname.match(/[CS][0-9]+h?$/)) {esg.innerHTML="<P>The "+group.grpname.replace(/([SCD])([0-9]*)([hsidv]*)/g, '$1<SUB>$2$3</SUB>')+" group has "+number(n)+ " nontrivial subgroups: " +nlist+". Each of them appears in only one orientation, which is also the standard orientation for that group."}
              else if (n>1 && n==subgroups.length-subgroups.trivial && group.grpname.match(/C[0-9]*[13579]v|D[0-9]*[13579]$/)) {esg.innerHTML="<P>The "+group.grpname.replace(/([SCD])([0-9]*)([hsidv]*)/g, '$1<SUB>$2$3</SUB>')+" group has "+number(n)+ " nontrivial subgroups: " +nlist+". Each of them appears in only one orientation, which in all cases except "+(group.grpname.match(/C[0-9]*[13579]v/)?"C<SUB>s</SUB>":"C<SUB>2</SUB>")+" is also the standard orientation for that group."}
              else if (n>1 && n==subgroups.length-subgroups.trivial) {esg.innerHTML="<P>The "+group.grpname.replace(/([SCD])([0-9]*)([hsidv]*)/g, '$1<SUB>$2$3</SUB>')+" group has "+number(n)+ " nontrivial subgroups: " +nlist+". Each of them appears in only one orientation, which, however, is not in all cases the standard orientation for that group"}
            if (group.grpname=="C2v") esg.innerHTML+= '<P>The C<SUB>2v</SUB> group itself is a subgroup of C<SUB>2<I>n</I>v</SUB> (one or two orientations), D<SUB>2<I>n</I>h</SUB> (three or four orientations), D<SUB>2<I>n</I>d</SUB> (one orientation) and the isometric groups <A href="Td.html">T<SUB>d</SUB></A>, <A href="Th.html">T<SUB>h</SUB></A>, <A href="Ih.html">I<SUB>h</SUB></A> (all one orientation) and <A href="Oh.html">O<SUB>h</SUB></A> (three orientations).'
            if (group.grpname=="C2h") esg.innerHTML+= '<P>The C<SUB>2h</SUB> group itself is a subgroup of C<SUB>2<I>n</I>h</SUB> (one orientation), D<SUB>2<I>n</I>h</SUB> (three orientations), D<SUB>(2<I>n</I>+1)d</SUB> (one orientation) and the isometric groups <A href="Th.html">T<SUB>h</SUB></A>, <A href="Ih.html">I<SUB>h</SUB></A> (both one orientation) and <A href="Oh.html">O<SUB>h</SUB></A> (two orientations).'
            esg.style.display=""
        }
     //alert (subgroups.length+" "+subgroups.removed+" "+subgroups.ignoreme)
     var str="<DIV class=stickleft><P>"
     if (subgroups.length==1) {str+="The "+group.grpname.replace(/([DSCTOI])(.*)/,"$1<SUB>$2</SUB>")+" group contains only one nontrivial subgroup."}
      else 
         {
            str+="This “correlation table” lists "+(subgroups.length-subgroups.ignoreme-subgroups.trivial==1?"the only nontrivial subgroup":(subgroups.removed==0?"all ":" ")+ number(subgroups.length-subgroups.ignoreme-subgroups.trivial)+" nontrivial subgroups")+" of "+group.grpname.replace(/([DSCTOI])(.*)/,"$1<SUB>$2</SUB>")+", and gives the correspondences of irreducible representations. "
            if (subgroups[subgroups.length-1].name=="C1") str+="The trivial C<SUB>1</SUB> subgroup is also included, because it acts as target for symmetry reduction along some normal modes."
            if (subgroups.S2nresorted) str+="The entries have been sorted such that all subgroups of any subgroup are shown to the right of that subgroup; unfortunately, this rule forces S<SUB><B>2<I>n</I></B></SUB> to appear after D<SUB><I><B>n</B></I>d</SUB>. "
            if (subgroups.noncanonical==0) str+=" All subgroups appear in <I>standard orientation</I>. "
              else str+="Each subgroup is generated by a subset of the symmetry elements of the parent"+(subgroups.noncanonical?", as shown in the table header":"")+".<P> "
            if (subgroups.noncanonical==0) str+=" "
             else if (subgroups.length-subgroups.noncanonical==1) str+=" There is one subgroup in <I>standard orientation</I>, "
             else str+=" There are "+number(subgroups.length-subgroups.noncanonical)+" subgroups in <I>standard orientation</I>, "
            if (subgroups.noncanonical) str+=" and "+((subgroups.noncanonical>1)?number(subgroups.noncanonical-subgroups.ignoreme)+" subgroups":" one single subgroup")+" in <I>non-standard orientation</I>. Display of the latter "+(checked?"can be toggled":"is hidden and can be enabled")+" using the control below the table. "
            if (subgroups.removed==1) str+="One "+subgroups.removedgroups.replace(/([CD])([0-9]*)([hvd]?)/,"$1<SUB>$2$3</SUB>")+" subgroup in non-standard-orientation has been removed from the table in the interest of brevity; its correlations are the same as for the corresponding standard-oriented group, with the rows B<SUB>1<I>x</I></SUB> and B<SUB>2<I>x</I></SUB> interchanged."
         }
     var x=parseInt(grp.match(/[0-9]+/))
     
     if (subgroups.ignoreme==1) str+="For convenience, the table also offers one redundant entry marked with an asterisk (*); it is identical to the preceding standard-oriented group, with different elements chosen as generators."
     if (subgroups.ignoreme>1) str+="For convenience, the table also offers "+number(subgroups.ignoreme)+" redundant entries marked with an asterisk (*); they are identical to their preceding standard-oriented groups, with different elements chosen as generators."
     if (subgroups.removed>1) str+= '<P>The subgroups of types C<SUB><I>n</I>v</SUB>, D<SUB><I>n</I></SUB>, D<SUB><I>n</I>h</SUB> and D<SUB><I>n</I>d</SUB> appear mostly '+(is_power_of_two(x)?" (for <I>n</I>&lt;"+x+" always) ":" ")+"in pairs, where one subgroup is standard-oriented and the other rotated by &pi;/"+x+" (C<SUB>"+(2*x)+"</SUB>"+(is_integer(720/x)?", "+(180/x)+"°)":")")+" about the <I>z</I> axis. Their correlations are pairwise identical except that the B<SUB>1<I>x</I></SUB> and B<SUB>2<I>x</I></SUB> rows are interchanged. In "+number(subgroups.removed)+" of these pairs ("+subgroups.removedgroups.replace(/([CD])([0-9]*)([hvd]?)/g,"$1<SUB>$2$3</SUB>")+"), the non-standard oriented member has been removed from the table in the interest of brevity. In the other cases, both entries had to be kept because they act as potential targets for symmetry reduction along normal coordinates. These almost redundant groups have been marked with a black diamond (♦), and removal of such a group is indicated by a hollow diamond (♢, shown only if non-standard subgroups are enabled)."
     if (group.grpname.match(/C[0-9]+v|D[0-9]+$/) &&x>4 && is_integer(x/2)) str+= "<P>"+(is_power_of_two(x)?"All ":"Those ")+(group.grpname.match(/C[0-9]+v/)?"C<SUB><I>n</I>v</SUB>":"D<SUB><I>n</I></SUB>")+" subgroups "+(!is_power_of_two(x)?"where <I>n</I> divides "+x+" into an even number":"")+" appear in pairs interconvertible by &pi;/"+x+" (C<SUB>"+(2*x)+"</SUB>"+(is_integer(720/x)?", "+(180/x)+"°)":")")+" rotation about the <I>z</I> axis: The standard-oriented member takes all its "+(group.grpname.match(/C[0-9]+v/)?"vertical mirror planes":"perpendicular axes")+" from the "+(group.grpname.match(/C[0-9]+v/)?"&sigma;<SUB>v</SUB>":"<NOBR>C<SUB class=minisop>2</SUB><SUP class=minisop>&prime;</SUP></NOBR>")+" elements of the parent group, while the other is in non-standard orientation and uses only the "+(group.grpname.match(/C[0-9]+v/)?"&sigma;<SUB>d</SUB>":"<NOBR>C<SUB class=minisop>2</SUB><SUP class=minisop>&Prime;</SUP></NOBR>")+" elements. Their correlations are pairwise identical except that the B<SUB>1</SUB> and B<SUB>2</SUB> rows are interchanged. Despite the small information in these columns, they have to be listed in full because both members of a pair act as potential targets for symmetry reduction along normal coordinates. These cases have been marked with a diamond (♦)."
     if (group.grpname.match(/[OT]/)) 
        {
           str="<DIV class=stickleft><P>This “correlation table” lists all "+(number(subgroups.length-(subgroups.ignoreme?subgroups.ignoreme:0)))+" nontrivial subgroups of "+group.grpname.replace(/([DSCTOI])(.*)/,"$1<SUB>$2</SUB>")+", and gives the correspondences of irreducible representations.  Each subgroup is generated by a subset of the symmetry elements of the parent, as shown in the table header."
           str+= "<P>Cubic point groups have a complicated product structure involving a tetragonal (or orthorhombic) and a trigonal subsymmetry. "
           if (group.grpname!="T") str+="The left part of the table lists the cubic subgroups and the central part the "+(group.grpname.charAt=="O"?"tetragonal":"orthorhombic")+" subgroups. "
           if (group.grpname=="T") str+="The left part of the table lists the orthorhombic subgroups. "
           str+= "On the right, the trigonal subgroups are listed; in these, the rôle of the main axis (<I>z</I> in standard orientation) is played by the space diagonal <I>x</I>+<I>y</I>+<I>z</I>. "
           if (group.grpname.match(/[OT]h/)) str+= "The C<SUB>i</SUB> subgroup belongs both to "+(group.grpname.charAt(0)=="O"?"tetragonal":"orthorhombic")+" and to trigonal symmetry and is shown at the end of the trigonal section."
           if (group.grpname.match(/[O]$/)) str+= "There are two distinct D<SUB>2</SUB> subgroups in O; one of them belongs to the tetragonal subsymmetry, while the other mixes symmetry elements of both classes. For convenience, both D<SUB>2</SUB> subgroups are shown in the tetragonal section. "
           if (group.grpname=="O") str+= '<P>The table also shows a redundant D<SUB>4</SUB> group which is identical to the standard-oriented D<SUB>4</SUB> but constructed from different generators; the two entries differ only in the B<SUB>1</SUB> and B<SUB>2</SUB> labels. (Equivalent redundancy also exits in <A class=plaina href="Oh.html">O<SUB>h</SUB></A>, but is not shown there.)'
           if (group.grpname.match(/[O]h/)) str+= '<P>There are three distinct C<SUB>2v</SUB> subgroups in O<SUB>h</SUB>; one of them belongs to the tetragonal subsymmetry, while the others mix symmetry elements of both classes. For convenience, all C<SUB>2v</SUB> subgroups are shown in the tetragonal section; a similar argument applies to the pairs of  D<SUB>2h</SUB>, D<SUB>2</SUB> and (with some modification) D<SUB>2d</SUB> subgroups.<P>The D<SUB>4h</SUB>, D<SUB>4</SUB> and C<SUB>4v</SUB> subgroups could also have been constructed from different generators (using <NOBR>C<SUB class=minisop>2</SUB><SUP class=minisop>&prime;</SUP></NOBR> and &sigma;<SUB>d</SUB> instead of C<SUB>2</SUB> and &sigma;<SUB>h</SUB>, respectively); in that case, their correlations would be identical, but with the B<SUB>1<I>x</I></SUB> and B<SUB>2<I>x</I></SUB> labels interchanged. To keep the table short, this is not shown (but an equivalent case appears in the correlation table of the <A class=plaina href="O.html">O</A> group). <P>Note that the C<SUB>3v</SUB> subgroup has an orientation incompatible to the D<SUB>3</SUB>, although both are built on the same trigonal axis.'
        }
     if (group.grpname.match(/[I]/)) 
        {
           str="<DIV class=stickleft><P>This “correlation table” lists all "+(number(subgroups.length))+" nontrivial subgroups of "+group.grpname.replace(/([DSCTOI])(.*)/,"$1<SUB>$2</SUB>")+", and gives the correspondences of irreducible representations. Each subgroup is generated by a subset of the symmetry elements of the parent, as shown in the table header. "
           str+= "<P>Icosahedral symmetry is the superposition of a 3/6-fold (trigonal) and a 5/10-fold (pentagonal) symmetry. The two share their C<SUB>2</SUB> axes, which gives rise to a 2-fold (orthorhombic) subsymmetry. Tetrahedral groups can be subgroups of icosahedral groups because tetrahedral symmetry is a superposition of orthorhombic and trigonal. "
           if (group.grpname=="I") str+="The subgroups of I are listed in the order: Tetrahedral, pentagonal, trigonal and orthorhombic. <P>In icosahedral standard orientation, the coordinate axes are C<SUB>2</SUB> and  the space diagonal <I>x</I>+<I>y</I>+<I>z</I> is C<SUB>3</SUB>. "
           if (group.grpname=="Ih") str+="The subgroups of I<SUB>h</SUB> are listed in the order: Isometric (tetrahedral or icosahedral), pentagonal, trigonal and orthorhombic. <P>In icosahedral standard orientation, the coordinate axes are C<SUB>2</SUB>,  the space diagonals <I>x</I>±<I>y</I>±<I>z</I> are C<SUB>3</SUB> and all coordinate planes act as &sigma;. "
           str+= "This is identical to the cubic standard orientation; thus, the "+(group.grpname=="I"?"cubic":"isometric")+" and the orthorhombic subgroups can appear in <I>their</I> standard orientation, while the trigonal symmetries are built on <I>x</I>+<I>y</I>+<I>z</I>=0 and the pentagonal ones along a more complicated axis, <NOBR class=eg>e.&thinsp;g.</NOBR>, 2<I>x</I>+(√<SPAN style='text-decoration:overline' xclass=over>5</SPAN>−1)·<I>y</I>=0 (all permutations of signs and coordinates are allowed). "
           if (group.grpname=="Ih") str+="The C<SUB>(2<I>n</I>+1)v</SUB> subgroups have an orientation incompatible to the corresponding D<SUB>(2<I>n</I>+1)</SUB> and D<SUB>(2<I>n</I>+1)d</SUB> groups, although they are built on the same axes."
        }
     str+="</DIV><DIV class=borderdiv>"

//
//   Do the subgroup table
//

     if (false && group.grpname.match(/[CS][0-9]+$|C[0-9]*[13579][hv]|D[0-9]*[13579]$/))
        {
           var c1=new Object()
           c1.name="C1"
           c1.chars=[[1]]
           c1.irred=["A"]
           c1.sop=[""]
           c1.lowered=true
           c1.ori=""
           c1.labels=new Array()
           c1.trivial=new Array()
           for (i=0;i<group.nclass;i++) 
               {
                  //if (group.orig[i].charAt(0)=="T") group.distvec[i][group.distvec[i].length]=subgroups.length
                  if (group.orig[i].charAt(0)=="E" && !group.distvec[i]) group.distvec[i]=[subgroups.length,subgroups.length]
                  if (group.grpname.match(/C[0-9]*[13579]v|D[0-9]*[13579]$/) && group.orig[i].charAt(0)=="E" && group.distvec[i].length==1) group.distvec[i][group.distvec[i].length]=subgroups.length
                  if (!group.distvec[i]) group.distvec[i]=[subgroups.length]
                  c1.labels[i]="A"
                  if (group.orig[i].charAt(0)=="E") c1.labels[i]="A A"
                  c1.trivial[i]=true
               }
           subgroups[subgroups.length]=c1
           //console.log(subgroups[0])
           //console.log(group.distvec)
        }

     str+="<TABLE id=subgrouptable><COLGROUP><COL></COL>"
     if (group.grpname.charAt(0)=="I")
        {
           var x="cubic"
           str+="</COLGROUP><COLGROUP class="+x+">"
           for (i=0; i<subgroups.length;i++)
               {
                  var clname="cg"
                  if (subgroups[i].noncanonical) clname="cg noncanonical"
                  if (x=="cubic" && subgroups[i].name.match(/[5]/)) {x="pentagonal"; str+="</COLGROUP><COLGROUP class="+x+'><COL class="'+clname+'"></COL>'}
                  else if (x=="pentagonal" && subgroups[i].name.match(/[36]/)) {x="trigonal"; str+="</COLGROUP><COLGROUP class="+x+'><COL class="'+clname+'"></COL>'}
                  else if (x=="trigonal" && subgroups[i].name.match(/[CD][2]/)) {x="orthorhombic"; str+="</COLGROUP><COLGROUP class="+x+'><COL class="'+clname+'"></COL>'}
                  else {str+='<COL class="'+clname+'"></COL>'}
               }
        }
      else if (group.cubic)
        {
           var x="cubic"
           if (group.grpname!="T") {str+="</COLGROUP><COLGROUP class="+x+">"}
           for (i=0; i<subgroups.length;i++)
               {
                  var clname="cg"
                  if (subgroups[i].noncanonical) clname="cg noncanonical"
                  if (x=="cubic" && subgroups[i].name.match(/[24]/)) {x="tetragonal"; str+="</COLGROUP><COLGROUP class="+x+'><COL class="'+clname+'"></COL>'}
                  else if (x=="tetragonal" && subgroups[i].name.match(/[36]/)) {x="trigonal"; str+="</COLGROUP><COLGROUP class="+x+'><COL class="'+clname+'"></COL>'}
                  else {str+='<COL class="'+clname+'"></COL>'}
               }
        }
      else 
        { 
           for (i=0; i<subgroups.length; i++) 
               { 
                  var fl=false,j,k
                  if (group.distvec) 
                     {
                        for (j=1;j<group.nclass;j++) 
                            {
                               for (k=0;k<(group.distvec[j]?group.distvec[j].length:0);k++) 
                                   {
                                       //console.log ("i,j,k="+i+" "+j+" "+k+"  "+group.distvec[j])
                                       fl=fl||group.distvec[j][k]==i
                                   }
                            }
                     }
                  var clname="cg"
                  if (subgroups[i].noncanonical) clname="cg noncanonical"
                  if (fl) clname+=" lowered"
                  subgroups[i].lowered=fl
                  str+='<COL class="' + clname + '"></COL>' 
               }
        }
     str+= "</COLGROUP><THEAD"+(x&&x<6?" class=nodiamonds":"")+"><TR><TD class=leftcorner><SPAN>"+group.grpname.replace(/([OTISDC])(.*)/,"$1<SUB>$2</SUB></SPAN>")
     for (i=0; i<subgroups.length; i++) { str+='<TD class="irrep'+((subgroups[i].noncanonical)?" noncanonical":"")+'" onClick="toggle_product_column(this)" onMouseOver="highlight_product_column(this,true)" onMouseOut="highlight_product_column(this,false)">'+subgroups[i].name.replace(/^([CDSTOI])([0-9]*)([hvd]?)$/,"<SPAN xhref=$1$2$3.html>$1<SUB>$2$3</SUB></SPAN>").replace(/^([OTDI])([hvd]?)$/,"<A xhref=$1$2.html>$1<SUB>$2</SUB></SPAN>").replace(/C<SUB>1h<\/SUB>/,"C<SUB>s</SUB>").replace(/S<SUB>2<\/SUB>/,"C<SUB>i</SUB>").replace (/<A (x?href=C1v.html)/, '<A title="C1v is Cs in non-standard orientation" $1').replace (/<A (x?href=D1.html)/, '<A title="D1 is C2 in non-standard orientation" $1').replace (/<A (x?href=D1h.html)/, '<A title="D1h is C2v in non-standard orientation" $1').replace (/<A (x?href=D1d.html)/, '<A title="D1d is C2h in non-standard orientation" $1'); if (subgroups[i].killme) str+='†'; if (subgroups[i].ignoreme) str+='<SPAN title="Redundant group: Identical to preceeding standard-oriented group with permuted symmetry operations" class=ast>*</SPAN>'; if (subgroups[i].rotated && !group.grpname.match(/D[0-9]*d/)) str+='<SPAN title="z-Rotated twin of the previous group" class=hash>♦</SPAN>'; if (subgroups[i].widow) str+='<SPAN title="A z-rotated twin of this group exits, but has been removed from the table" class=diamond>♢</SPAN>' }
     if (group.grpname.match(/^[TOI]/) || subgroups.noncanonical)
        {
        str+="<TD class=dummy><TR class=generators><TD>"
        var str1=""
        for (i=0;i<subgroups.length;i++) 
            {
               str1+='<TD class="irrep'+((subgroups[i].noncanonical)?" noncanonical":"")+'" onClick="toggle_product_column(this)" onMouseOver="highlight_product_column(this,true)" onMouseOut="highlight_product_column(this,false)">'
               if (subgroups[i].sop[0]) str1+=subgroups[i].sop[0]
               if (subgroups[i].sop[1] && subgroups[i].name.charAt(0)!="S" && subgroups[i].name!="C4" && subgroups[i].sop[1]!="E") str1+="<SPAN class=comma>,</SPAN>"+subgroups[i].sop[1]
               if (subgroups[i].sop[2] && subgroups[i].name.match(/D[0-9]*[24680]h/)) str1+="<SPAN class=comma>,</SPAN>"+subgroups[i].sop[2]
            }
          str1=str1.replace(/>i/g,"><SPAN>i</SPAN>").replace(/([CS])([0-9]+)([′″])/g,"<NOBR>$1<SUB class=minisop>$2</SUB><SUP class=minisop>$3</SUP></NOBR>").replace(/σ([hvd]?)/g,"<NOBR>σ<SUB>$1</SUB></NOBR>").replace(/([CS])([0-9]+)/g,"<NOBR>$1<SUB>$2</SUB></NOBR>")
          str+=str1
        }
     str+="<TD class=dummy></THEAD><TFOOT"+(x&&x<6?" class=nodiamonds":"")+"><TR><TD>"+group.grpname.replace(/([OTISDC])(.*)/,"$1<SUB>$2</SUB>")
     var showdistortionsinchartab=window.location.toString().match(/file:\/\/\//) //|| group.grpname.match(/[CS][0-9]+h?$/) || group.grpname.match(/[CD][12][hv]/)
     showdistortionsinchartab=true
     if (showdistortionsinchartab) 
        {
            //if (group.grpname.match(/[CS][0-9]+$/) && group.sop0[group.sop0.length-1]!="C2") document.getElementById("chartab").getElementsByTagName("TBODY")[0].className+=" showdistort"
            if (group.grpname.match(/[CSDTO]/)) document.getElementById("lower_symmetry_chartab").style.display="block"
        }
     for (i=0; i<subgroups.length; i++) 
           { 
                str+='<TD xxxtitle="'+i+'" class="irrep'+((subgroups[i].noncanonical)?" noncanonical":"")+((subgroups[i].lowered)?" lowered":"")+((subgroups[i].ignoreme)?" redundant":"")+'" onClick="toggle_product_column(this)" onMouseOver="highlight_product_column(this,true)" onMouseOut="highlight_product_column(this,false)">'+subgroups[i].name.replace(/^([CDS])([0-9]*)([hvd]?)$/,"<A class=subgrplink href=$1$2$3.html>$1<SUB>$2$3</SUB>"+(subgroups[i].ignoreme?'<SPAN title="Redundant group: Identical to preceeding standard-oriented group with permuted symmetry operations" class=ast>*</SPAN>':(subgroups[i].rotated&& !group.grpname.match(/D[0-9]*d/)?'<SPAN title="z-Rotated twin of the previous group" class=hash>♦</SPAN>':(subgroups[i].widow?'<SPAN title="A z-rotated twin of this group exits, but has been removed from the table" class=diamond>♢</SPAN>':"")))+"</A>").replace(/^([OTDI])([hvd]?)$/,"<A href=$1$2.html>$1<SUB>$2</SUB></A>").replace(/C<SUB>1h<\/SUB>/,"C<SUB>s</SUB>").replace(/S<SUB>2<\/SUB>/,"C<SUB>i</SUB>")
                if (subgroups[i].ori!="") 
                   {
                      str+="<SPAN class=ori>("+subgroups[i].ori+")</SPAN>"
                      if (subgroups[i].name == "C2" && (subgroups[i].ori=="x" || subgroups[i].ori=="x|y")) str+='(<A class=extragroup href="D1.html">D<SUB>1</SUB></A>)'
                      if (subgroups[i].name == "C2v" && (subgroups[i].ori=="x,xy" || subgroups[i].ori=="x|y,xy" )) str+='(<A class=extragroup href="D1h.html">D<SUB>1h</SUB></A>)'
                      if (subgroups[i].name == "C2h" && (subgroups[i].ori=="x" || subgroups[i].ori=="x|y")) str+='(<A class=extragroup href="D1d.html">D<SUB>1d</SUB></A>)'
                      if (subgroups[i].name == "C1h" && (subgroups[i].ori=="xz" || subgroups[i].ori=="xz|yz")) str+='(<A class=extragroup href="C1v.html">C<SUB>1v</SUB></A>)'
                   }
           }
     str=str.replace(/(d.html[^a-z]*d[^a-z]*class=hash>)/g, "$1&thinsp;") // super-brittle: add &thinsp; in front of diamond for Dnd subgroups
     str+='<TD class=dummy></TFOOT><TBODY xclass=showdistort><TR class=spacer><TD>'
     for (i=0;i<subgroups.length;i++) str+='<TD onMouseOver="highlight_product_column(this,true)" onMouseOut="highlight_product_column(this,false)">'
     str+="<TD class=dummy>"
     for (i=0;i<group.nclass;i++)
         {
             str+='<TR class="'+group.orig[i].charAt(0)+'"><TD class="irrep '+group.orig[i].charAt(0)+'" onMouseOut="unhighlight_product_row(this)" onClick="toggle_product_row(this)">'+group.irrep[i]
             if (group.grpname.match(/[CDS]/) && i>0) // disable octahedral/tetrahedral symmetry reduction
                {
                     str+= ' <SPAN style="font-size:80%" class=dist>→ '+group.dist[i].toString().replace(/([TOI])([hvd]?)/g,"<A href=$1$2.html>$1<SUB>$2</SUB></A>").replace(/C<SUB>1h<\/SUB>/g,"C<SUB>s</SUB>").replace(/([CDS])([0-9]+)([hvd]?)/g,"<A class=subgrplink href=$1$2$3.html>$1<SUB>$2$3</SUB></A>").replace(/C<SUB>1h<\/SUB>/g,"C<SUB>s</SUB>").replace(/S<SUB>2<\/SUB>/g,"C<SUB>i</SUB>") + "</SPAN>"
                     if (showdistortionsinchartab) document.getElementById("chartab").getElementsByClassName("distort")[i].innerHTML="<SPAN class=sgrp>→ "+group.dist[i].toString().replace(/([TOI])([hvd]?)/g,"<A href=$1$2.html>$1<SUB>$2</SUB></A>").replace(/C<SUB>1h<\/SUB>/g,"C<SUB>s</SUB>").replace(/([CDS])([0-9]+)([hvd]?)/g,"<A class=subgrplink href=$1$2$3.html>$1<SUB>$2$3</SUB></A>").replace(/C<SUB>1h<\/SUB>/g,"C<SUB>s</SUB>").replace(/S<SUB>2<\/SUB>/g,"C<SUB>i</SUB>")+"</SPAN>"
                }
             for (j=0;j<subgroups.length;j++) 
                 { 
                     str+= '<TD xtitle="'+group.orig[i].replace(/"/,"&quot;")+' in '+subgroups[j].name.replace(/^S2$/,"Ci").replace(/C1h/,"Cs")+'" onMouseOver="highlight_product_column(this,true)" onMouseOut="highlight_product_column(this,false)">'; 
                     if (subgroups[j].labels[i]) str+="<DIV class='grad perm'></DIV><DIV class='grad temp'></DIV><DIV class=content>"+subgroups[j].labels[i].replace (/([ABE][0-9gu]*[′″]?) \1 \1 \1 \1/, "<nobr><spanclass=num>5</span>$1</nobr>").replace (/([ABE][0-9gu]*[′″]?) \1 \1 \1/, "<nobr><spanclass=num>4</span>$1</nobr>").replace (/([ABE][0-9gu]*[′″]?) \1 \1/, "<nobr><spanclass=num>3</span>$1</nobr>").replace (/([ABE][0-9gu]*[′″]?) \1/g, "<nobr><spanclass=num>2</span>$1</nobr>").replace(/ /g,"<spanclass=plus>+</span>").replace(/([ABET])([0-9gu]*)([′″])?/g, '<SPAN class="irrep prime">$1<SUB>$2</SUB><SUP class="prime">$3</SUP></SPAN>').replace (/class="irrep prime">([^<>]*<SUB>[^<>]*<\/SUB>)<SUP class="prime"><\/SUP>/g, "class=irrep>$1").replace (/<SUB><\/SUB>/g,"").replace(/<SUB>([0-9][0-9]<\/SUB>)/,"<SUB class=dig2>$1").replace(/<SUP class="prime">″/, '<SUP class="prime d">″').replace(/A(<SUP class="prime)/g,"A$1 a").replace(/spanclass/g, "span class")+"</DIV>"
                 }
             str+="<TD class=dummy>"
         }
     str+="<TR class=spacer><TD>"
     for (i=0;i<subgroups.length;i++) str+='<TD onMouseOver="highlight_product_column(this,true)" onMouseOut="highlight_product_column(this,false)">'
     str += "<TD class=dummy></TBODY></TABLE></DIV><DIV class=stickleft><FORM class=plaina onSubmit='return false' id=subgroupform>"

    var improper=new Array()
    for (i=0;i<subgroups.length;i++) {if (subgroups[i].name.match(/C1v|D1[hd]?$/)) improper[improper.length]=subgroups[i].name}

    improper.C1v='the <A href="C1h.html">C<SUB>s</SUB></A> point group with the mirror plane &sigma;(<I>yz</I>) instead of &sigma;(<I>xz</I>).'
    improper.D1='the <A href="C2.html">C<SUB>2</SUB></A> point group with the rotation axis <I>x</I> instead of <I>z</I>.'
    improper.D1d='the <A href="C2h.html">C<SUB>2h</SUB></A> point group with the rotation axis <I>x</I> instead of <I>z</I> and the &sigma;<SUB>h</SUB> being <I>yz</I> instead of <I>xz</I>.'
    improper.D1h='the <A href="C2v.html">C<SUB>2v</SUB></A> point group with the rotation axis <I>x</I> instead of <I>z</I>; the &sigma;<SUB>v</SUB> is <I>xz</I> as usual, but the &sigma;<SUB>d</SUB> is <I>xy</I> instead of <I>yz</I>.'

    if (improper.length==1) str+= '<P>In this table, the symbol <A href="'+improper[0]+'.html">'+improper[0].replace(/^(.)(.*)/,"$1<SUB>$2</SUB></A>")+" means "+improper[improper[0]]
    
    if (improper.length>1)
       {
           str+="<P>In the correlation table, some non-canonical names of point groups appear:<UL>"
           for (j=improper.length-1;j>=0;j--) str+= '<LI><A href="'+improper[j]+'.html">'+improper[j].replace(/^(.)(.*)/,"$1<SUB>$2</SUB></A>")+" means "+improper[improper[j]]
       }
    str+="</LI></FORM></DIV>"

     e.innerHTML=str
     document.getElementById("subgroupreplace").parentElement.replaceChild(e,document.getElementById("subgroupreplace"))

     //alert ("A BB CCC D EE FF".match(/([ACE])\1/))
     //alert (!"A BB CCC D EE FF".match(/([ACE])\1/))
     e=document.getElementById("subgrouptable").getElementsByTagName("TBODY")[0].getElementsByTagName("TD")
     for (i=0;i<e.length;i++) {if (e[i].previousSibling && e[i].getElementsByTagName("SPAN").length>=2) e[i].className="deg"}
     if (group.grpname.match(/[IOT]/)) for (i=0;i<e.length;i++) 
         {
             if (e[i].previousSibling && e[i].attributes.xtitle && e[i].attributes.xtitle.value.match(/^[ETGH]/) && !e[i].innerHTML.replace (/<[^<>]*>/g,"").match (/[ETGH]/)) e[i].className="deg deg2"
         }

     if (group.orig[0].charAt(group.orig[0].length-1) != "'") document.getElementById("subgroupdiv").getElementsByClassName("borderdiv")[0].className+=" noprime"
     if (cubic)
        {
          if (group.grpname=="Oh") document.getElementById("subgroupdiv").getElementsByClassName("borderdiv")[0].style.paddingLeft="0.5em"
        }

    if (document.getElementById("subgrouptable").getElementsByTagName("TBODY")[0].getElementsByClassName("deg").length>10 || group.cubic)
       {
          document.getElementById("subgroupform").innerHTML='<P class=labelp><LABEL><INPUT type=checkbox id=subgroup_show_deg onChange="subgroup_refine(this)"> Highlight split degeneracies</LABEL><BR>'+document.getElementById("subgroupform").innerHTML
       }

    el=document.getElementById("subgrouptable").getElementsByTagName("TBODY")[0].getElementsByTagName("TR")
    j=0
    for (i=0; i<el.length;i++)
        {
             if (!el[i].className.match (/^[AETGHB]/)) continue
             if (group.distvec && group.distvec[j] && (e=el[i].getElementsByClassName("dist")[0]))
                {
                    var k
                    window.j=j
                    e.onmouseover=  function (ex) { highlight_distort (this,true ) }
                    e.onmouseout =  function (ex) { highlight_distort (this,false) }
                    e=e.parentNode.parentNode.getElementsByTagName ("TD")
                    e[group.distvec[j][0]+1].className+=" distorted"
                    if (group.distvec[j][1]) e[group.distvec[j][1]+1].className+=" distorted"
                    if (group.distvec[j][2]) e[group.distvec[j][2]+1].className+=" distorted"
                    //alert (i+" "+group.orig[j]+" "+group.dist[j]+"  "+group.distvec[j]+" "+e[group.distvec[j][0]+1].className)
                }
             j++
        }

    var tr=document.getElementById("subgrouptable").getElementsByTagName("TBODY")[0].getElementsByTagName("TR")
    var th=document.getElementById("subgrouptable").getElementsByTagName("THEAD")[0].getElementsByTagName("TD")

    var flag=false
    for (i=1; i<group.nclass; i++)
       {
           if (tr[i].firstChild.innerHTML.replace(/<[^<>]*>/g,"").match(/[ABT]1/))
              {
                  td=tr[i].getElementsByTagName("TD")
                  tdn=tr[i+1].getElementsByTagName("TD")
                  var irreptyp=tr[i].firstChild.innerHTML.replace(/<[^<>]*>/g,"").match(/[ABT]/)
                  for (j=1; j<subgroups.length+1;j++)
                      {
                         if (td[j].innerHTML.replace(/<[^<>]*>/g,"").match(irreptyp+'2') && td[j].innerHTML.replace(/<[^<>]*>/g,"")!=tdn[j].innerHTML.replace(/<[^<>]*>/g,"") && (tr[i].firstChild.innerHTML.replace(/<[^<>]*>/g,"").match(/[′″]/)==td[j].innerHTML.replace(/<[^<>]*>/g,"").match(/[′″]/))) {flag=true;td[j].className+=" paradox"; tdn[j].className+=" paradox"}
                      }
              }
       }
    for (i=1; i<group.nclass; i++)
       {
           //console.log ("Start loop i="+i+" "+tr[i].firstChild.innerHTML.replace(/<[^<>]*>/g,"")+" "+tr[i+1].firstChild.innerHTML.replace(/<[^<>]*>/g,""))
           if (tr[i].firstChild.innerHTML.replace(/<[^<>]*>/g,"").match(/[E]/) && tr[i+1].firstChild.innerHTML.replace(/<[^<>]*>/g,"").match(/[E]/))
              {
                  td=tr[i].getElementsByTagName("TD")
                  tdn=tr[i+1].getElementsByTagName("TD")
                  //console.log ("Inner loop starts")
                  for (j=1; j< subgroups.length+1;j++)
                      {
                         if (td[j].innerHTML.replace(/<[^<>]*>/g,"").match(/[E][0-9]/) && tdn[j].innerHTML.replace(/<[^<>]*>/g,"").match(/[E][0-9]/))
                            {
                               td0=parseInt(td[j].innerHTML.replace(/<[^<>]*>/g,"").replace(/E([0-9]*).*/,"$1"))
                               td1=parseInt(tdn[j].innerHTML.replace(/<[^<>]*>/g,"").replace(/E([0-9]*).*/,"$1"))
                               //if (subgroups[j-1].name=="S12") console.log (i+" "+j+"  "+td[j].innerHTML.replace(/<[^<>]*>/g,"")+" "+td0+"   "+tdn[j].innerHTML.replace(/<[^<>]*>/g,"")+" "+td1+"  test="+(Math.abs(td0-td1)>1))
                               if (Math.abs(td0-td1)>1) 
                                  { 
                                      flag=true;  
                                      td[j].className=td[j].className.replace (/ *paradox/g,"")+" paradox";  
                                      //if (subgroups[j-1].name=="S12") console.log ("Marking: "+td[j].innerHTML.replace(/<[^<>]*>/g,"")+tdn[j].innerHTML.replace(/<[^<>]*>/g,""))
                                      tdn[j].className=tdn[j].className.replace (/ *paradox/g,"")+" paradox"
                                      if (tr[i-1] && tr[i-1].getElementsByTagName("TD")[j].innerHTML.replace(/<[^<>]*>/g,"").match(/E[0-9]/) && 
                                          tr[i-2] && tr[i-2].getElementsByTagName("TD")[j].innerHTML.replace(/<[^<>]*>/g,"").match(/E[0-9]/) &&
                                          !tr[i-1].getElementsByTagName("TD")[j].className.match(/paradox/) && tr[i-2].getElementsByTagName("TD")[j].className.match(/paradox/))
                                               tr[i-1].getElementsByTagName("TD")[j].className+=" paradox"
                                  }
                            }
                      }
              }
       }

    for (i=1; i<group.nclass+1; i++)
        {
           for (j=1;j<subgroups.length+1;j++)
               {
                    //console.log(i+" ("+group.orig[i-1]+") "+j+" ("+subgroups[j-1].name+") "+subgroups[j-1].noncanonical +" "+tr[i].getElementsByTagName("TD")[j].className)
                    if (subgroups[j-1].noncanonical)
                       {
                          td=tr[i].getElementsByTagName("TD")[j]
                          if (td.className) td.className+=" noncanonical"
                             else td.className="noncanonical"
                          //console.log ("⟶ "+td.className)
                       }
               }
        }

    if (flag && !group.grpname.match(/D2h?$/)) document.getElementById("subgroupform").innerHTML='<P class=labelp><LABEL><INPUT type=checkbox id=subgroup_show_para onChange="subgroup_refine(this)"> Highlight paradoxical indices</LABEL><BR>'+document.getElementById("subgroupform").innerHTML
    if (group.nclass>10 || subgroups.length>8) document.getElementById("subgroupform").innerHTML='<P class=labelp><LABEL><INPUT type=checkbox id=subgroup_show_tit onChange="subgroup_refine(this)"> Show tooltips when hovering over a table cell</LABEL><BR>'+document.getElementById("subgroupform").innerHTML
    checked1=subgroups.length<20
    //if (subgroups.ignoreme) { document.getElementById("subgroupform").innerHTML = '<P class=labelp><LABEL style="white-space:nowrap">(<INPUT style="margin-left:0.05em" type=checkbox id=subgroup_show_redundant '+(checked1?"checked":"")+' onChange="subgroup_refine_groupselect(this)"> Show also some redundant subgroups (with symmetry elements swapped) </LABEL><BR>' +document.getElementById("subgroupform").innerHTML }
    if (subgroups.noncanonical) { document.getElementById("subgroupform").innerHTML = '<P class=labelp><LABEL><INPUT type=checkbox id=subgroup_show_noncan '+(checked?"checked":"")+' onChange="subgroup_refine_groupselect(this)"> '+(subgroups.noncanonical>1?"Show also those "+number(subgroups.noncanonical)+" subgroups which have noncanonical orientation":"Show also the single subgroup in non-standard orientation")+' </LABEL> '+(subgroups.ignoreme?'&nbsp;<LABEL style="white-space:nowrap">(<INPUT style="margin-left:0.05em" type=checkbox id=subgroup_show_redundant '+(checked1?"checked":"")+' onChange="subgroup_refine_groupselect(this)"> also '+(subgroups.ignoreme>1?subgroups.ignoreme+' redundant groups)':'redundant group)')+' </LABEL>':'')+'<BR>' +document.getElementById("subgroupform").innerHTML }
    checked=group.grpname.match(/[CSDT]|O$/)
    //checked=true
    var warn= !checked && group.grpname.match(/T.|I|O|D[0-9]+[02468]|C[0-9]+[02468]v/)
    if ((( subgroups.length>4 ) || group.grpname.match(/[OT]/)&&subgroups.length>4) && !group.grpname.match(/[TIO]/)) document.getElementById("subgroupform").innerHTML += '<P class=labelp><LABEL class=show_dist><INPUT type=checkbox id=subgroup_show_dist '+(checked && subgroups.length<=20?"checked":"")+' onChange="subgroup_refine(this)"> Show symmetry lowering by distortion along symmetry adapted coordinate  </LABEL> &nbsp;<LABEL style="white-space:nowrap">(<INPUT type=checkbox style="margin-left:0.05em" id=subgroup_show_dist_perm onChange="subgroup_refine(this)"> highlight permanently)</LABEL> '+(!warn?"":'<SPAN id=xdist_warn style="display:none">(<SPAN>These results are unconfirmed!</SPAN>)</SPAN>')+' <BR>' 
    if (( subgroups.length>15 ) && group.grpname.match(/D|C[0-9]+[vh]/)) document.getElementById("subgroupform").innerHTML += '<P class=labelp><LABEL><INPUT type=checkbox id=subgroup_show_dist_groups onChange="subgroup_refine_groupselect(this)"> Show only those groups to which symmetry can be lowered </LABEL> <BR>'
   if (subgroups.length>15)  document.getElementById("subgroupform").innerHTML += '<P class=labelp><LABEL><INPUT onChange="toggle_transitions(this)" '+((subgroups.length>33 || subgroups.length>23 && navigator.userAgent.match(/Gecko/) && !navigator.userAgent.match(/WebKit/)) && group.grpname.match(/[CD]/)?"checked ":"")+'type=checkbox id=toggle_trans_sg> Disable soft transition effects on hovering</LABEL>'
    if (subgroups.length>6 && !group.cubic) 
       {
           var grptyp=new Array
           grptyp[grptyp.length]={name:"Cn", regexp:",C[0-9]+,", count:0}
           grptyp[grptyp.length]={name:"Cnv", regexp:",C[0-9]+v,", count:0}
           grptyp[grptyp.length]={name:"Cnh", regexp:",C[0-9]+h,|,Cs,", count:0}
           grptyp[grptyp.length]={name:"Dn", regexp:",D[0-9]+,", count:0}
           grptyp[grptyp.length]={name:"Dnh", regexp:",D[0-9]+h,", count:0}
           grptyp[grptyp.length]={name:"Dnd", regexp:",D[0-9]+d,", count:0}
           grptyp[grptyp.length]={name:"S2n", regexp:",S[0-9]+,|,Ci,", count:0}
           grptyp[grptyp.length]={name:"Sn", regexp:",S[0-9]+,|,Ci,|C[0-9]*[13579]h,", count:0}
           grptyp[grptyp.length]={name:"Sn>1", regexp:",S[0-9]+,|,Ci,|,C[0-9]+[13579]h,|,C[3579]h,", count:0}
           grptyp.count=0
           for (i=0;i<subgroups.length;i++)
               {
                   for (j=0; j<grptyp.length; j++)
                       {
                           if ((","+subgroups[i].name+",").match(grptyp[j].regexp)) grptyp[j].count++
                       }
               }
           if (grptyp[8].count==grptyp[6].count || grptyp[7].count==grptyp[2].count) grptyp[7].count=0 // sn is contained in either s2n or cnh
           grptyp[8].count=0
           //if (grptyp[1].count==1) grptyp[1].count=0 // only cs
           if (grptyp[2].count==1 && !group.grpname.match(/D[0-9]*d/)) grptyp[2].count=0 // only cs
           if (grptyp[2].count==2 && group.grpname.match(/C[0-9]*[24680]v/)) grptyp[2].count=0 // only cs
           var str='<P class=labelp><LABEL><INPUT type=checkbox id=subgroup_show_type onChange="subgroup_refine_groupselect(this)"> Show only subgroups of type:</LABEL> <SPAN class=disabled id=subgroups_type_list> '
           for (j=0; j<grptyp.length; j++)
               {
                  if (grptyp[j].count) {str+='<LABEL onMouseOver="highlight_sub_tfoot(this,true)" onMouseOut="highlight_sub_tfoot(this,false)" style="white-space:nowrap"><INPUT type=checkbox '+(grptyp[j].name=="Sn"?'':'checked')+' disabled onChange="if (this.checked) highlight_sub_tfoot(this.parentNode,false);subgroup_refine_groupselect(this); if (this.checked) highlight_sub_tfoot(this.parentNode,true)" value="'+grptyp[j].regexp+'">'+grptyp[j].name.replace(/([CSD])(.*)/,"$1<SUB>$2</SUB>").replace(/n/,"<I>n</I>")+"</LABEL> "; grptyp.count ++}
               }
           str+="</SPAN><BR>"
           if (grptyp.count>1) document.getElementById("subgroupform").innerHTML += str // + document.getElementById("subgroupform").innerHTML
       }

    el=document.getElementById("subgrouptable")
    try {if (group.nclass>=12 || subgroups.length>12 || group.grpname.match(/Ih/)) document.getElementById("subgroupform").innerHTML+='Set font size in table to <INPUT type=number style="width:4em" step="any" pattern="[0-9]*\.[0-9]" id="set_font_size_subgrouptable" class=setfontsize onChange="set_font_size(this)" value="'+parseInt(window.getComputedStyle(el, "").getPropertyValue("font-size"))+'" defval="'+parseInt(window.getComputedStyle(el, "").getPropertyValue("font-size"))+'"> px'} catch (foo) {}


      if (subgroups.noncanonical || group.cubic) 
            {
                 str=""
                 if (!group.cubic) str+="<P>Subgroups not in standard orientation (with respect to the coordinate system of the supergroup) are shown in paler colour. "
                  else str+="<P>All subgroups in the "+(group.grpname.match(/I/)?"pentagonal and trigonal sections":"trigonal section")+" are not in standard orientation with respect to the coordinate system of the supergroup. "+(group.grpname.match (/Td|O|Ih/)?"Moreover, some subgroups (shown in lighter colour) do not follow the coordinate system of their section, but have to use a private local coordinate system. ":"")
                 str+="Their irreducible representations are calculated in their own local coordinate system. Therefore, correspondence between symmetry labels and cartesian products as given in their character tables applies to the local (subgroup), not to the global (supergroup) coordinate system."
                 document.getElementById("subgroupform").innerHTML += str
            }


    if (document.getElementById("subgroup_show_noncan") || group.cubic ) {subgroup_refine(); subgroup_refine_groupselect(); }
    e1=document.getElementById("subgroupform").getElementsByClassName("setfontsize")[0]; if(e1) {e1.value=0; e1.onchange()  }
    e=document.getElementById("subgrouptable").getElementsByTagName("TFOOT")[0].getElementsByTagName("TR")[0].getElementsByTagName("TD")
    var hmax=0,hi
    for (i=1; i<e.length;i++) 
         {
              hi=parseFloat(window.getComputedStyle(e[i], "").getPropertyValue("height"))
              if(hi) hmax=Math.max (hmax,hi)
              //alert (window.getComputedStyle(e[i], "").getPropertyValue("height")+" "+hmax)
         }
    e[0].style.height=hmax+"px"

   }

function set_font_size(that)
    {
       var el=document.getElementById(that.id.replace(/set_font_size_/,""))
       var cn=document.getElementsByTagName("BODY")[0].className
       if (that.value=='0')
           {
               var ww= parseInt(window.getComputedStyle(document.getElementsByTagName("BODY")[0]).getPropertyValue("width"))
               var tw= parseInt(window.getComputedStyle(el).getPropertyValue("width"))
               var fs=parseFloat(window.getComputedStyle(document.getElementById(that.id.replace(/set_font_size_/,""))).getPropertyValue("font-size"))
               //alert (that.value+"  "+that.id+"   "+ww+" "+tw+ " "+el)
               var mx=parseInt(window.getComputedStyle(document.getElementsByTagName("BODY")[0]).getPropertyValue("font-size"))
               var newfs=Math.min(Math.max(parseInt(10*ww/tw*fs - (that.id.match(/chartab/)?6: 2))/10,8.5),mx)
               if (newfs<1.05*fs && tw-3>ww ) {that.value=newfs} else {that.value=parseInt(10*fs)/10}
           }
       document.getElementsByTagName("BODY")[0].className="reallynotransitions notransitions"
       el.style.fontSize=that.value+"px"
       el.parentNode.offsetHeight
       document.getElementsByTagName("BODY")[0].className=cn
       that.blur()
    }

function highlight_sub_tfoot(that,flag)
    {
        if (that.firstChild.disabled) return
        var re=new RegExp ( that.firstChild.value )
        //console.log ("Event handler called "+that.firstChild.value)
        var ef=document.getElementById("subgrouptable").getElementsByTagName("TFOOT")[0].getElementsByClassName("subgrplink")

        for (i=0;i<ef.length;i++)
            {
               if (ef[i].grpnam.match(re))
                  {
                     if (flag && that.firstChild.checked) ef[i].parentElement.className+=" highlight"
                        else ef[i].parentElement.className=ef[i].parentElement.className.replace(/ highlight/,"")
                  }
            }
    }

function subgroup_refine(tthis)
    {
       var el=document.getElementById("subgrouptable").getElementsByTagName("TBODY")[0].getElementsByClassName("deg")
       var ec=document.getElementById("subgrouptable").getElementsByTagName("COL")
       var er=document.getElementById("subgrouptable").getElementsByTagName("TR")
       var eg=document.getElementById("subgrouptable").getElementsByTagName("TFOOT")[0].getElementsByTagName("TR")[0].getElementsByClassName("subgrplink")

       if (document.getElementById("subgroup_show_deg")) {for (i=0; i<el.length;i++) el[i].className=(document.getElementById("subgroup_show_deg").checked)?el[i].className+" show":el[i].className.replace(/  *show/g,"")}
       el=document.getElementById("subgrouptable").getElementsByTagName("TBODY")[0].getElementsByClassName("paradox")
       if (document.getElementById("subgroup_show_para")) {for (i=0; i<el.length;i++) el[i].className=(document.getElementById("subgroup_show_para").checked)?el[i].className+" show":el[i].className.replace (/ *show/g,"")}
       el=document.getElementById("subgrouptable").getElementsByTagName("TBODY")[0].getElementsByTagName("TD")
       if (document.getElementById("subgroup_show_tit")) {for (i=0; i<el.length;i++) el[i].title=(document.getElementById("subgroup_show_tit").checked && el[i].attributes.xtitle)?el[i].attributes.xtitle.value:""}

       el=document.getElementById("subgrouptable").getElementsByClassName("dist")
       e=document.getElementById("subgroup_show_dist")
       if (e) {for (i=0;i<el.length;i++) {el[i].style.display=(e.checked)?"inline":"none"}}
       if (tthis==e && document.getElementById("dist_warn")) {document.getElementById("dist_warn").style.display=(e.checked?"inline":"none")}
       var e1=document.getElementById("subgroup_show_dist_perm")
       if (e1) {e1.disabled= (e.checked) ? "" : "disabled"; e1.parentNode.className= (e.checked) ? "" : "inactive" }
       if (e1 && !e1.disabled) {document.getElementById("subgrouptable").getElementsByTagName("TBODY")[0].className=(e1.checked) ? "showdistort" : "" }
       if (e1 && e1.disabled) {document.getElementById("subgrouptable").getElementsByTagName("TBODY")[0].className=""}

    }

function subgroup_refine_groupselect(tthis)
    {
       var ec=document.getElementById("subgrouptable").getElementsByTagName("COL")
       var er=document.getElementById("subgrouptable").getElementsByTagName("TR")
       var eg=document.getElementById("subgrouptable").getElementsByTagName("TFOOT")[0].getElementsByTagName("TR")[0].getElementsByClassName("subgrplink")

       e=document.getElementById("subgroup_show_noncan")
       e0=document.getElementById("subgroup_show_noncan")
       e1=document.getElementById("subgroup_show_redundant")
       e2=document.getElementById("subgroup_show_dist_groups")
       e3=document.getElementById("subgroup_show_type")
       e4=document.getElementById("subgroups_type_list")
       e4l=(e4 && e4.getElementsByTagName("INPUT"))
       if (e && e1 && e.checked && (!e2 || !e2.checked))   {e1.disabled=false; e1.parentNode.className=""}
       if (e && e1 && (!e.checked || (e2 && e2.checked)))  {e1.disabled=true; e1.parentNode.className="inactive"}

       if (e)
          {
             if (e.checked)
                 {
                    exx=document.getElementById("subgrouptable").getElementsByTagName("THEAD")[0]; if (!exx.className.match(/nodiamonds/)) exx.className=""
                    exx=document.getElementById("subgrouptable").getElementsByTagName("TFOOT")[0]; if (!exx.className.match(/nodiamonds/)) exx.className=""
                 }
               else
                 {
                    exx=document.getElementById("subgrouptable").getElementsByTagName("THEAD")[0]; if (!exx.className.match(/nodiamonds/)) exx.className="hidediamonds"
                    exx=document.getElementById("subgrouptable").getElementsByTagName("TFOOT")[0]; if (!exx.className.match(/nodiamonds/)) exx.className="hidediamonds"
                 }
          }

       var visib=new Array(), truehii=new Array()

       if (e4)
          {
             e4.className= (e3.checked) ? "" : "disabled"
             var count=0
             for (i=0;i<e4l.length;i++)  e4l[i].disabled= (e3.checked) ? "" : "disabled"
             for (i=0;i<e4l.length;i++)  if (e4l[i].checked) count++
             if (count==1) for (i=0;i<e4l.length;i++)  if (e4l[i].checked) e4l[i].disabled="disabled"
          }


       var extragrpnam="",grpnam
       for (i=0; i<eg.length; i++)
           {
               if (grpnam=eg[i].grpnam)  {} // store data in dom on first invocation
                  else
                     {
                        grpnam=','+eg[i].href.replace(/.*\/(.*).html/,"$1")+','
                        if ((e=eg[i].parentNode.getElementsByClassName("extragroup")) && e.length) { extragrpnam= e[0].href.replace(/.*\/(.*).html/,"$1"); grpnam+=extragrpnam+',' }
                          else if (extragrpnam&& eg[i].getElementsByClassName("hash").length) {grpnam+=extragrpnam+','; extragrpnam=""}
                          else {extragrpnam=""}
                        //console.log (i+" "+eg[i].href.replace(/.*\/(.*).html/,"$1")+" grpnam="+grpnam+"     "+eg[i].grpnam)
                        eg[i].grpnam=grpnam
                     }
               visib[i]=true
               truehii[i]=(ec[i+1].className.indexOf("truehiigh")>-1)
               if (e0 && !e0.checked && eg[i].parentNode.className.match(/noncanonical/)) visib[i] = false
               if (e1 && !e1.checked && eg[i].parentNode.className.match(/redundant/)) visib[i] = false
               if (e2 && e2.checked && !eg[i].parentNode.className.match(/lowered/)) visib[i] = false
               //console.log (i+" '"+eg[i].href.replace(/.*\/(.*).html/,"$1")+"' "+ec[i+1].className+"   "+eg[i].parentNode.className.match(/lowered/)+"   "+visib)
               if (visib[i] && e3 && e3.checked)
                  {
                      visib[i]=false
                      for (j=0; j<e4l.length; j++)
                        {
                             if (e4l[j].checked && grpnam.match(new RegExp (e4l[j].value))) visib[i]=true
                        }
                  }
           }

       if (visib.howmany(true)==0) {tthis.checked = !tthis.checked; tthis.onchange(); return}


       if (e0 || e3)
          {
             ii=0
             var ee=document.getElementById("subgrouptable")
             ee.className+=" noani"
             for (i=1; i<ec.length; i++) 
                 {
                    //console.log ('col='+i+"  visib="+(visib[i-1])+"   group="+(eg[i-1]?eg[i-1].innerHTML.replace(/<[^<>]*>/g,""):"")+"   class="+ec[i].className)
                    if (visib[i-1])
                        { 
                            ii++
                            for (j=0; j<er.length; j++) 
                               {
                                  er[j].getElementsByTagName("TD")[i].style.display = ""
                               }
                            if (ec[i].className.match(/truehiigh/)) ec[ii].className=ec[ii].className.replace(/hi*ghli*ght */g,"").replace(/  *$/,"")+" hiighlight"
                               else ec[ii].className=ec[ii].className.replace(/hi*ghli*ght */g,"").replace(/  *$/,"")
                            ec[ii].offsetHeight
                        }
                      else
                        { 
                            for (j=0; j<er.length; j++) 
                               {
                                  er[j].getElementsByTagName("TD")[i].style.display = "none"
                               }
                            ec[i].className=ec[i].className.replace(/hi*ghli*ght */g,"").replace(/  *$/,"")
                            ec[i].offsetHeight
                        }
                 }

             var e=ee.getElementsByTagName("TFOOT")[0].getElementsByClassName("ori")
             for (i=0; i<e.length; i++)  {e[i].style.display = (e0.checked)?"":"none"}
             ee.className=ee.className.replace(/ noani/,"")
          }
             
    }

function highlight_distort (tthis,flag,vec) {if (flag) {tthis.parentNode.parentNode.className+=" showdistort"} 
                                                  else {tthis.parentNode.parentNode.className=tthis.parentNode.parentNode.className.replace(/ showdistort/,"")}}

function calc_distortion_subgroup (subgroups)
    {
        var i,j,k,str

        var dbg=false
        if (group.grpname.match(/[IOT]/)) return
        group.dist=new Array()
        group.distvec=new Array()
        var x=parseInt(group.grpname.match(/[0-9]+/))
        group.dist[0]=""
        for (i=0; i<subgroups.length; i++) {if (subgroups[i].ignoreme) subgroups[i].trivial=0}


        //for (i=0; i<subgroups.length; i++)
        //    {
        //       var str=""
        //       subgroups[i].subsub= new Array()
        //       for (j=0; j<subgroups.length; j++) {subgroups[i].subsub[j]=is_contained (subgroups[i],subgroups[j]); if (subgroups[i].subsub[j]) str+= subgroups[j].name+"("+j+") "}
        //       console.log (i+" Subgroup="+subgroups[i].name+"    subsubgroups="+str)
        //    }

        for (i=1;i<group.irrep.length; i++)
            {
                if (group.orig[i].match(/^[AB]/)) 
                   {
                       str=""
                       for (j=0; j<subgroups.length; j++) {if (subgroups[j].trivial[i]) {str+= subgroups[j].name + " "; subgroups[j].killme=false; group.distvec[i]=[j];break}}
                       if(str=="") str="C1 "
                       group.dist[i]=str.match (/^[^ ]+/)
                       //if (str.match (/^S[0-9]* /))
                           //{
                              //var n=parseInt((str.match (/^S[0-9]* /)).toString().match(/[0-9]+/))/2
                              //group.dist[i] = (str.match (new RegExp ("D"+n+"d","")) || str.match (new RegExp ("C"+(2*n)+"h",""))) || group.dist[i]
                           //}
                       if (dbg) console.log ("Distortion "+group.orig[i]+"  dist="+group.dist[i])
                   }
                 else if (true)
                   {
                       var idx=-1
                       for (j=0; j<subgroups.length; j++) { if (subgroups[j].trivial[i]) {idx=j; subgroups[j].trivial[i]--; subgroups[j].killme=false; group.distvec[i]=[j]; break} }
                       if (idx==-1) {group.dist[i]="C1"}
                        else if (subgroups[idx].trivial[i]) {subgroups[idx].trivial[i]--;group.dist[i]="2 "+subgroups[idx].name; idx=-1} else {group.dist[i]=subgroups[idx].name}
                       if (dbg) console.log ("irrep "+i+" "+group.orig[i]+"  first pass "+idx+" "+group.dist[i])
                       if (idx>-1  && group.grpname.match(/C[0-9]+v/) && subgroups[idx+1] && subgroups[idx].name == subgroups[idx+1].name && subgroups[idx+1].noE) subgroups[idx+1].trivial[i]=0
                       if (idx>-1  && group.grpname.match(/D[0-9]+h?$/) && subgroups[idx+1] && subgroups[idx].name == subgroups[idx+1].name && subgroups[idx+1].noE) subgroups[idx+1].trivial[i]=0
                       if (idx>-1 && group.grpname.match(/D[0-9]+h?/) && subgroups[idx+1] && subgroups[idx].name == subgroups[idx+1].name && subgroups[idx+1].trivial[i]) {group.dist[i]+=(" "+group.dist[i]); subgroups[idx+1].killme=false; group.distvec[i][1]=idx+1; idx=-1}
                       if (idx > -1 && subgroups[idx].trivial[i]) idx=-1
                       if (idx>-1)
                          {
                               for (j=0; j<subgroups.length; j++) 
                                  {
                                       if (subgroups[j].trivial[i]) {if (is_contained(subgroups[idx], subgroups[j])) subgroups[j].trivial[i]--}
                                  }
                               for (j=0; j<subgroups.length; j++) { if (subgroups[j].trivial[i] && !subgroups[j].noE) {group.dist[i] += " "+subgroups[j].name; group.distvec[i][1]=j; subgroups[j].killme=false; break}}
                               if (j==subgroups.length) {group.dist[i] += " C1"}
                          }
                       if (group.dist[i]=="C1") group.dist[i]="2 C1"

                       var distold=group.dist[i]
                       var y=parseInt(group.dist[i].match(/[0-9]+/))
                       var z=parseInt(group.orig[i].match(/[0-9]+/))
                       if (!z) z=1
                       z=gcd(x,z)

                       if (group.grpname.match(/C[0-9]*[02468]v|D[0-9]*[02468]h*$/) && is_even(x/2) && group.dist[i].match(/([CD][0-9]*[dvh]*),* \1/))
                          {
                              if (is_even(x/z/2)) group.dist[i]=group.dist[i].replace(/([CD][0-9]*[dvh]*),* \1/,"[ 2&thinsp;$1 ]")
                          }
                              
                       if (group.grpname.match(/D[0-9]*[02468]d*$/) && is_even(x) && group.dist[i].match(/D([0-9]*),* C\1v|C2,* C1h/))
                          {
                              if (is_even(x/z) && group.dist[i].match(/D([0-9]*),* C\1v/)) group.dist[i]=group.dist[i].replace(/(D[0-9]*),* (C[0-9]*v)|(C2),* (C1h)/,"[ 2&thinsp;$1 | 2&thinsp;$2 ]")
                              if (is_even(x/z) && group.dist[i].match(/C2,* C1h/)) group.dist[i]=group.dist[i].replace(/(C2),* (C1h)/,"[ 2&thinsp;$1 | 2&thinsp;$2 ]")
                          }


                       if (dbg) console.log ("Distortion "+group.orig[i]+"  dist="+group.dist[i]+(group.dist[i]!=distold?"   (from "+distold+")    ":"   ") + "idx="+idx+"   distvec="+group.distvec[i])
                   }
            }

    }

var gcd = function(a,b) { return (!b)?a:gcd(b,a%b); }

function is_contained (grp, sgrp)
            {
                var nax=parseInt(grp.name.match(/[0-9]+/))
                var snax=parseInt(sgrp.name.match(/[0-9]+/))
                //console.log ("\nInput: "+grp.name+" "+sgrp.name+"  canon="+grp.noncanonical+" "+sgrp.noncanonical+"   "+nax+" "+snax)
                //alert (grp.name+" "+sgrp.name)
                if (grp==sgrp) return false
                if (sgrp.name=="C1") return true
                if (grp.name == sgrp.name && grp.name.match(/D[02468]+h?$/) && sgrp.name.match(/D2h?$/)) return true
                if (!grp.noncanonical && (!sgrp.noncanonical) || grp.name.match(/D[0-9]*d$/) && sgrp.name.match(/C[0-9]*v$/) && sgrp.ori.match(/^z,/) )
                   {
                      if (grp.name.match (/D[0-9]*d/) && sgrp.name.match(/S[0-9]*$/) && is_integer (2*nax/snax) && !is_integer (nax/snax) ) return true
                      if (parseInt(nax/snax)*snax == nax)
                         {
                             if (grp.name.match(/C[0-9]*$/) && sgrp.name.match(/C[0-9]*$/)) return true
                             if (grp.name.match(/C[0-9]*v$/) && sgrp.name.match(/C[0-9]*v*$/)) return true
                             if (grp.name.match(/C[0-9]*h$/) && sgrp.name.match(/C[0-9]*h*$/)) return true
                             if (grp.name.match(/C[0-9]*h$/) && sgrp.name.match(/S[0-9]$/)) return true
                             if (grp.name.match(/D[0-9]*$/) && sgrp.name.match(/[CD][0-9]*$/)) return true
                             if (grp.name.match(/D[0-9]*h$/) && sgrp.name.match(/[SCD][0-9]*[hv]?$/)) return true
                             if (grp.name.match(/D[0-9]*h$/) && sgrp.name.match(/D[0-9]*d$/) && is_even (nax/snax)) return true
                             if (grp.name.match(/D[0-9]*d$/) && sgrp.name.match(/[SCD][0-9]*v?$/)) return true
                             if (grp.name.match(/D[0-9]*d$/) && sgrp.name.match(/D[0-9]*d$/) && is_odd (nax/snax)) return true
                             if (grp.name.match(/S[0-9]*$/) && sgrp.name.match(/S[0-9]*$/) && is_odd (nax/snax)) return true
                             if (grp.name.match(/S[0-9]*$/) && sgrp.name.match(/C[0-9]*$/) && is_even (nax/snax)) return true
                         }
                      else {return false}
                   }
                else if (!grp.noncanonical)
                   {
                       //if (grp.name.match(/C[0-9]*v$|D[0-9]*h$/) && sgrp.name=="C1h" && sgrp.sop[0]=="σv") return true
                       //if (grp.name.match(/C[0-9]*v$|D[0-9]*h$/) && sgrp.name=="C1h" && sgrp.sop[0]=="σd" && is_even(nax)) return true
                       if (grp.name.match(/C[0-9]*v$|D[0-9]*h$/) && sgrp.name=="C1h" && sgrp.ori.match(/xz|yz/)) return true
                       if (grp.name.match(/C[0-9]*v$|D[0-9]*h$/) && is_even(nax/2) && sgrp.name=="C1h" && sgrp.ori.match(/π\/4/)) return true
                       if (grp.name.match(/D[0-9]*/) && sgrp.name.match(/[CD]2$/) && sgrp.sop[0]=="C2′") return true
                       if (grp.name.match(/D[0-9]*/) && sgrp.name.match(/D2$/) && sgrp.sop[0]=="C2" && sgrp.sop[1]=="C2″" && is_even(nax)) return true
                       if (grp.name.match(/D[0-9]*/) && sgrp.name.match(/C2$/) && sgrp.sop[0]=="C2″" && is_even(nax)) return true
                       if (grp.name.match(/D[0-9]*d/) && sgrp.name=="C1h" && sgrp.sop[0]=="σd″" ) return true
                       if (grp.name.match(/D[0-9]*h/) && sgrp.name=="C2v" && sgrp.sop[0]=="C2′") return true
                       if (grp.name.match(/D[0-9]*h/) && sgrp.name=="C2v" && sgrp.sop[0]=="C2″" && is_even(nax)) return true
                       if (grp.name.match(/D[0-9]*h/) && sgrp.name=="C2h" && sgrp.sop[0]=="C2′") return true
                       if (grp.name.match(/D[0-9]*h/) && sgrp.name=="C2h" && sgrp.sop[0]=="C2″" && is_even(nax)) return true
                       if (grp.name.match(/D2$/) && sgrp.name=="D2" && grp.ori=="z,x" && sgrp.ori=="x,y") {return true}
                   }
                else if (grp.noncanonical && grp.ori.charAt(0)=='z')
                   {
                       if (grp.name.match(/C[0-9]*v$/) && sgrp.name.match (/C[0-9]*v?$/) && is_integer (nax/snax) && (sgrp.ori.charAt(0)=='z' || (!sgrp.ori)) ) return true
                   }
                else
                   {
                      if (grp.name.match(/C2v$/) && sgrp.name.match (/C1h|C2$/) && grp.ori.charAt(0)=='x' && sgrp.ori.charAt(0)=='x' ) return true
                      if (grp.name.match(/C2h$/) && sgrp.name.match (/C2$/) && grp.ori== sgrp.ori ) return true
                      if (grp.name.match(/C2h$/) && sgrp.name.match (/C1h$/) && grp.ori== "x" && sgrp.ori=="yz") return true
                      if (grp.name.match(/C2h$/) && sgrp.name.match (/C1h$/) && grp.ori== "y" && sgrp.ori=="xz") return true
                      if (grp.name.match(/C2h$/) && sgrp.name.match (/S2$/)) return true
                   }
            }

function make_ori (grp, sgrp)
{
       if (!sgrp.noncanonical) return ""
       var x=parseInt(grp.match(/[0-9]+/))
       var y=parseInt(sgrp.name.match(/[0-9]+/))

       if (grp.match (/C[0-9]+v/))
          {
              if (sgrp.name.match(/C1h/)) return locate1(x,sgrp.sop[0])
              if (sgrp.name.match(/C[0-9]+v/)) return "z,"+locate1(x,sgrp.sop[1])
          }
        else if (grp.match (/D[0-9]+h?$/))
          {
              if (sgrp.name.match(/C2$|C1h|C2h/)) return locate1(x,sgrp.sop[0])
              if (sgrp.name.match(/D2h?$/) && sgrp.sop[0]=="C2′") return "x,y"
              if (sgrp.name.match(/C2v/) && sgrp.sop[0]=="C2′" && is_even(x/2) ) return "x|y,xy"
              if (sgrp.name.match(/C2v/) && sgrp.sop[0]=="C2′") return "x,xy"
              if (sgrp.name.match(/C2v/) && sgrp.sop[0]=="C2″") return locate1(x,sgrp.sop[0])+",xy"
              if (sgrp.name.match(/D[0-9]+h?$|C[0-9]+v/)) return "z,"+locate1(x,sgrp.sop[1])
              if (sgrp.name.match(/D[0-9]+d/)) return "z,"+locate1(x,sgrp.sop[1])
              if (sgrp.name.match(/D[0-9]*[13579]d/)) return "z,"+locate1(x,sgrp.sop[1])
          }
        else if (grp.match (/D[0-9]+d?$/))
          {
              if (sgrp.name.match(/C2$|C1h|C2h/)) return locate2(x,sgrp.sop[0])
              if (sgrp.name.match(/C[0-9]+v$/) && sgrp.sop[0].match(/C[0-9]+$/) && is_odd(x/2) && is_odd(x/y)) return "z,π/4"
              if (sgrp.name.match(/C[0-9]+v$/) && sgrp.sop[0].match(/C[0-9]+$/)) return "z,"+locate2(x,sgrp.sop[1])
          }
       return "???"

function locate1 (x,sop) /* cnv, dn, dnh,  */
   {
      if (sop=="σv") {return (is_even(x/2)?"xz|yz":"xz")}
       else if (sop=="C2′") {return (is_even(x/2)?"x|y":"x")}
       else if (sop=="σd" || sop=="C2″")
           {
              if (is_odd(x/2)) return (sop=="σd"?"yz":"y")
              if (is_odd(x/4)) return "π/4"
              return "2π/"+(2*x)
           }
   }
function locate2 (x,sop) /* dnd */
   {
      if (sop=="C2′") {return is_even(x)?"x|y":"x"}
       else if (sop=="σd" && is_odd (x)) return "yz"
       else if (sop=="σd" && is_odd (x/2)) return "π/4"
       else if (sop=="σd") return "π/"+(2*x)
   }
}
