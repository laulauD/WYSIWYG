jQuery(function ($){
    $.fn.my_wysiwyg=function (options={
        option1:"bold",
        option2:"italic",
        option3:"color",
        option4:"fontsize",
        option5:"strikethrough",
        option6:"left",
        option7:"center",
        option8:"right",
        option9:"justify",
        option10:"increase",
        option11:"decrease",
    },
   backColor={},
    buttonColor={},
   textAreaColor={},
   editAreaColor={}
    ){

        let $textarea=$('#textarea');
        let $title= $('<h1 id="title">My WYSIWYG</h1>');

        //Inputs
        let $inputBold, $inputItalic, $inputSelectColor,$optionsColor, $inputStrikethrough;
        let $inputAddLink, $inputRemoveLink,$inputSave, $inputFontSize,$inputVideo;
        let $inputIndent,$inputOutdent,$inputSourceCode,$inputText,$optionsFontSize;
        let  $inputAlignLeft, $inputAlignCenter, $inputAlignRight, $inputJustify, $inputIncreaseSize, $inputDecreaseSize;
        let $text = "text display"
        let $editingArea = $('<div id="editing-area" contentEditable></div>');



       $.each(options,function (index,value){
          /* console.log('index :'+index)
           console.log('value :'+value)
           console.log('index :'+index)
           console.log('value :'+value.length)*/

           for (i=0; i<value.length;i++){
               if (value[i]==='bold'){
                   inputBold();
                   console.log('bold')
               }
               if (value[i]==='italic'){
                   console.log('italic');
                   inputItalic();
               }
               if (value[i]==='color'){
                   console.log('color');
                   inputSelectColor();
               }
               if (value[i]==='link'){
                   console.log('link');
                   addLink();
               }

               if (value[i]==='indent'){
                   console.log('indent');
                   inputIndent();
               }

               if (value[i]==='outdent'){
                   console.log('outend');
                   inputOutdent();
               }
               if (value[i]==='strikethrough'){
                   console.log('strikethrough');
                   inputStrikethrough();
               }
               if (value[i]==='left'){
                   console.log('left');
                   inputAlignLeft();
               }
               if (value[i]==='center'){
                   console.log('center');
                   inputAlignCenter();
               }
               if (value[i]==='right'){
                   console.log('right');
                   inputAlignRight();
               }
               if (value[i]==='justify'){
                   console.log('justify');
                   inputJustify();
               }
               if (value[i]==='source'){
                   console.log('source');
                   inputSourceCode();
               }
               if (value[i]==='save'){
                   console.log('save');
                   inputSave();
               }
               if (value[i]==='image'){
                   console.log('image');
                   inputImage();
               }

               if (navigator.userAgent.search("Firefox") >= 0) {
                   console.log('mozilla');
                   if (value[i]==='increase'){
                       console.log('increase');
                       inputIncreaseSize();
                   }
                   if (value[i]==='decrease'){
                       console.log('decrease');
                       inputDecreaseSize();
                   }
               }else{
                   console.log('autre')
                   if (value[i]==='fontsize'){
                       console.log('fontsize');
                       inputFontSize();
                   }

               }

               if (value[i]==='video'){
                   console.log('video');
                   inputVideo();
               }

           }
       })



        $textarea.before($title);
        $textarea.append($editingArea);

        $editingArea = $('#editing-area');
        document.execCommand("defaultParagraphSeparator", false, "p");
        $title.css('text-align', 'center');

        function setBackgroundColor(color){
            $('body').css({
                background:color
            })
        }
        function setButtonColor(color){
            $('.btn').css({
                'background':color
            });
        }
        function setTextAeraColor(color){
            $textarea.css({
                'background':color
            });
        }
        function setEditAeraColor(color){
            $editingArea.css({
                'background':color
            });
        }

        $('body').css({
            background:'#606060'
        })
        $('#title').css({
            color:'#C0C0C0',
            'font-family' : 'Quicksand, sans-serif',
            'text-shadow' : '1px 1px 3px #000'
        })
        $textarea.css({
            'text-align': 'center',
            letterSpacing:'2px',
            color: '#e8e4e4',
            padding: '5%',
            'border-radius': '4%',
            background: 'linear-gradient(to bottom right, #c0c0c0 46%, #929292 95%)',
            margin: '1.5rem 10rem',
            'box-shadow' : '1px 1px 8px #FFF'
        })

        $editingArea.css({
            width: 'auto',
            height: '25em',
            margin: '1em',
            padding: '0.5em',
            border: '2px solid #606060',
            background: '#E1E1E1',
            color: '#606060',
            'text-align': 'left',
            'font-family' : 'Tahoma',
            overflow: 'auto',
            'word-wrap': 'break-word'
        })

        $('.btn').css({
            'background':'#8BB0E8',
            'min-width':'50px',
            'min-height':'40px',
            'margin':'2px',
            'text-shadow' : '1px 1px 2px #FFF '
        });
        //  $('.btn').hover(function (){
        //     $(this).css("background-color", "#3580f3");
        // }, function(){
        //     $(this).css("background-color", "#8BB0E8");
        // });

        $.each(backColor,function (index,value){
            if (value[i]==='d'){
                setButtonColor('#000000');
            }
            for (i=0; i<value.length;i++){
                setBackgroundColor(value[i]);
            }});

        $.each(buttonColor,function (index,value){
            for (i=0; i<value.length;i++){
                setButtonColor(value[i]);
            }});
        $.each(textAreaColor,function (index,value){
            for (i=0; i<value.length;i++){
                setTextAeraColor(value[i]);
            }})
        $.each(editAreaColor,function (index,value){
            for (i=0; i<value.length;i++){
                setEditAeraColor(value[i]);
            }})

        if (localStorage.getItem('textarea')){
            $editingArea[0].innerHTML=localStorage.getItem('textarea');
            setInterval(function (){
                localStorage.setItem('textarea',$editingArea[0].innerHTML);
            },120000);
        }


            window.addEventListener('beforeunload', function (e) {
                if ($editingArea[0].innerHTML!==localStorage.getItem('textarea')){
                e.preventDefault();
                e.returnValue = '';
                }
            });



        function trigger(option, value=''){
            if (value==null){
                console.log('quit')
                return;
            }else {
                console.log('value :'+value);
                document.execCommand(option, false, value);
            }
        }

        function inputBold(){
            $inputBold = $('<button class="btn"><i class="fa fa-bold" aria-hidden="true"></i></button>');
            $inputBold.css('font-weight','bold');
            $textarea.append($inputBold);
            $inputBold.click(function (){
                trigger('bold');
            })
        }
        function inputItalic(){
            $inputItalic = $('<button class="btn"><i class="fa fa-italic" aria-hidden="true"></i></button>');
            $inputItalic.css('font-style','italic');
            $textarea.append($inputItalic);
            $inputItalic.click(function (){
                trigger('italic');
            })
        }

        function inputSelectColor(){
            $inputSelectColor=$('<select></select>');
            $optionsColor=$('<option disabled>-- Couleur --</option>'
                +'<option value="#BBD2E1" selected>Fumée</option>'
                +'<option value="#A5D152" selected>Tilleul</option>'
                +'<option value="#E1CE9A" selected>Vanille</option>'
                +'<option value="#462E01" selected>Café</option>'
                +'<option value="#614B3A" selected>Cacao</option>'
                +'<option value="#463F32 " selected>Taupe</option>'
                +'<option value="#58290" selected>Marron</option>'
                +'<option value="#CFA0E9" selected>Parme</option>'
                +'<option value="#BF3030" selected>Fraise</option>'
                +'<option value="#C72C48" selected>Framboise</option>'
                +'<option value="#9683EC" selected>Lavande</option>'
                +'<option value="#B666D2" selected>Lilas</option>'
                +'<option value="pink" selected>Rose</option>'
                +'<option value="#F88E55" selected>Saumon</option>'
                +'<option value="#E73E01" selected>Corail</option>'
                +'<option value="#FFE4C4" selected>Beige</option>'
                +'<option value="#FFD700" selected>Or</option>'
                +'<option value="yellow" selected>Jaune</option>'
                +'<option value="#E67E30" selected>Abricot</option>'
                +'<option value="#0131B4" selected>Saphir</option>'
                +'<option value="#BEF574" selected>Pistache </option>'
                +'<option value="#00815F" selected>Émeraude</option>'
                +'<option value="#568203" selected>Avocat</option>'
                +'<option value="#16B84E" selected>Menthe</option>'
                +'<option value="green" selected>Vert</option>'
                +'<option value="#2C75FF" selected>Bleu électrique</option>'
                +'<option value="#25FDE9" selected>Turquoise</option>'
                +'<option value="blue" selected>Bleu</option>'
                +'<option value="#77B5FE" selected>Bleu ciel</option>'
                +'<option value="#811453" selected>Prune</option>'
                +'<option value="#E9383F" selected>Grenadine</option>'
                +'<option value="red" selected>Rouge</option>'
                +'<option value="orange" selected>Orange</option>'
                +'<option value="#FEA347" selected>Mandarine</option>'
                +'<option value="#791CF8" selected>Indigo</option>'
                +'<option value="#D473D4" selected>Mauve</option>'
                +'<option value="purple" selected>Violet</option>'
                +'<option value="#9E9E9E" selected>Souris</option>'
                +'<option value="black" selected>Noir</option>'
                +'<option value="#606060" selected>Gris (défaut)</option>');

            $textarea.append($inputSelectColor);
            $inputSelectColor.append($optionsColor);
            $inputSelectColor.change(function (){
                trigger('foreColor',this.value)
            });
        }

        function addLink(){

            $inputAddLink= $('<button class="btn"><i class="fas fa-link" aria-hidden="true"></i></button>');
            $inputRemoveLink= $('<button class="btn"><i class="fas fa-unlink" aria-hidden="true"></i></button>');
            $textarea.append($inputAddLink);
            $textarea.append($inputRemoveLink);
            $inputRemoveLink.css('text-decoration', 'line-through');
            $inputAddLink.click(function (){
                $test=prompt("Adresse du lien : ");
                console.log('test  :'+$test)
                trigger('createLink',$test);
            });
            $inputRemoveLink.click(function (){
                trigger('unlink');
            });
        }

        function inputVideo(){

            $inputVideo=$('<button class="btn"><i class="fab fa-youtube" aria-hidden="true"></i></button>');
            $textarea.append($inputVideo);
            $inputVideo.click(function (){
               $test= prompt("Adresse de la video : ").replace('watch?v=','embed/');
               $test=$test.replace('youtu.be','www.youtube.com/embed');
                console.log($test);
                let $videoDiv=('<iframe width="356" height="200" src='+$test+' frameborder="0" allowfullscreen></iframe>');
                $editingArea.append($videoDiv);
            });

        }
        function inputIndent(){

            $inputIndent= $('<button class="btn"><i class="fas fa-indent" aria-hidden="true"></i></button>');
            $textarea.append($inputIndent);
            $inputIndent.click(function (){
                trigger('indent');
            })
        }



        function inputOutdent(){

            $inputOutdent= $('<button class="btn"><i class="fas fa-outdent" aria-hidden="true"></i></button>');
            $textarea.append($inputOutdent);
            $inputOutdent.click(function (){
                trigger('outdent');
            })
        }

        function inputStrikethrough(){

            $inputStrikethrough = $('<button class="btn"><i class="fas fa-strikethrough" aria-hidden="true"></i></button>');
            $textarea.append($inputStrikethrough);
            $inputStrikethrough.css('text-decoration','line-through');
            $inputStrikethrough.click(function (){
                trigger('strikethrough');
            })
        }
        function inputAlignLeft(){

            $inputAlignLeft = $('<button class="btn"><i class="fas fa-align-left" aria-hidden="true"></i></button>');
            $textarea.append($inputAlignLeft);
            $textarea.append($inputAlignLeft);
            $inputAlignLeft.click(function (){
                trigger('justifyLeft');
            })
        }
        function inputAlignCenter(){

            $inputAlignCenter = $('<button class="btn"><i class="fas fa-align-center" aria-hidden="true"></i></button>');
            $textarea.append($inputAlignCenter);
            $inputAlignCenter.click(function (){
                trigger('justifyCenter');
            })
        }
        function inputAlignRight(){

            $inputAlignRight = $('<button class="btn"><i class="fas fa-align-right" aria-hidden="true"></i></button>');
            $textarea.append($inputAlignRight);
            $inputAlignRight.click(function (){
                trigger('justifyRight');
            })
        }
        function inputJustify(){

            $inputJustify = $('<button class="btn"><i class="fas fa-align-justify" aria-hidden="true"></i></button>');
            $textarea.append($inputJustify);
            $inputJustify.click(function (){
                trigger('justifyFull');
            })
        }
        function inputIncreaseSize(){

            $inputIncreaseSize = $('<button class="btn"><i class="fas fa-plus" aria-hidden="true"></i></button>');
            $textarea.append($inputIncreaseSize);
            $inputIncreaseSize.click(function (){
                trigger('increaseFontSize');
            })
        }
        function inputDecreaseSize(){

            $inputDecreaseSize = $('<button class="btn"><i class="fas fa-minus" aria-hidden="true"></i></button>');
            $textarea.append($inputDecreaseSize);
            $inputDecreaseSize.click(function (){
                trigger('decreaseFontSize');
            })
        }

        function inputSourceCode(){

            $inputSourceCode = $('<button class="btn"><i class="fas fa-code" aria-hidden="true"></i></button>');
            $inputText = $('<button class="btn"><i class="fas fa-file-alt" aria-hidden="true"></i></button>');
            $textarea.append($inputSourceCode);
            $textarea.append($inputText);
            $inputSourceCode.click(function (){
                $inputSourceCode.attr('disabled', 'disabled');
                $inputText.removeAttr('disabled', 'disabled');
                $editingArea[0].innerText = $editingArea[0].innerHTML
                $text = "code";

            })
            $inputText.click(function (){
                $inputSourceCode.removeAttr('disabled', 'disabled')
                $inputText.attr('disabled', 'disabled')
                $editingArea[0].innerHTML = $editingArea[0].innerText
                $text = "text"
            })
        }
        function inputImage() {

            $inputImage = $('<button class="btn"><i class="fas fa-images" aria-hidden="true"></i></button>');
            $textarea.append($inputImage)
            $inputImage.click(function () {
                $test=prompt("Adresse de l'image : ");
                console.log('test  :'+$test);
                trigger('insertImage',$test);
            })
        }

        function inputSave(){

            $inputSave=$('<button class="btn"><i class="fas fa-save" aria-hidden="true"></i></button>');
            $textarea.append($inputSave);
            $inputSave.click(function (){
                save();
            })
        }

        function save(){

            if (confirm("Voulez vous effectuer un sauvegarde ? Une sauvegarde sera effectuée toutes les 2 minutes")){
                localStorage.setItem('textarea',$editingArea[0].innerHTML);
                localStorage.setItem('text',$text);
            }
        }

        function inputFontSize(){

            $inputFontSize=$('<select></select>');
            $optionsFontSize=$('<option disabled>-- Taille --</option>'
                +'<option value="1"> 1 </option>'
                +'<option value="2"> 2 </option>'
                +'<option value="3" selected> 3 (défaut)</option>'
                +'<option value="4"> 4 </option>'
                +'<option value="5"> 5 </option>'
                +'<option value="6"> 6 </option>'
                +'<option value="7"> 7 </option>');
            $textarea.append($inputFontSize);
            $inputFontSize.append($optionsFontSize);
            $inputFontSize.change(function (){
                trigger('fontSize', this.value)
            });
        }

    }
});
