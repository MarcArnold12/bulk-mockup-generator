#target photoshop
//PHOTOSHOP SCRIPT 2020, stewcha.original@gmail.com

//setings
app.displayDialogs = DialogModes.NO;
app.bringToFront();
var scriptPath = ( File($.fileName).parent.fsName ).toString().replace(/\\/g, '/');
var replaceLayer = null;
//, "3300x4200-11x14 inch", "5906x8268-iso ratio", "5400x7200-3x4 ratio", "7200x10800-2x3 ratio", "4800x6000-4x5 ratio"
var exportSizes = ["3300x4200-11x14 inch", "5906x8268-iso ratio", "5400x7200-3x4 ratio", "7200x10800-2x3 ratio", "4800x6000-4x5 ratio"];
var replaceName = "Edit Here (3x4)";
//powyzej nazwy i rozmiar plikow
//create folder
function createFolder(path){
    var folder = Folder(path);
    if(!folder.exists) folder.create();    
};

//save psd
function savePSD(file){
    var saveFile = new File(file);
    var saveOptions = new PhotoshopSaveOptions();
    saveOptions.alphaChannels = true;
    saveOptions.annotations = true;
    saveOptions.embedColorProfile = true;
    saveOptions.layers = true;
    saveOptions.spotColors = true;
    app.activeDocument.saveAs(saveFile, saveOptions, true, Extension.LOWERCASE);
    return true;
};

//save jpg image
function saveJPG01(path){  
    var saveName = new File(path);
    var ss = new JPEGSaveOptions();  
    ss.quality = 12;
    ss.embedColorProfile = true;
    ss.formatOptions = FormatOptions.PROGRESSIVE;
    if(ss.formatOptions == FormatOptions.PROGRESSIVE){
    ss.scans = 5};
    ss.matte = MatteType.NONE; 
    activeDocument.saveAs(saveName, ss, true, Extension.LOWERCASE);   
};
//better saving jpg function
function saveJPG(file){ 
    var idsave = charIDToTypeID( "save" );
    var desc35 = new ActionDescriptor();
    var idAs = charIDToTypeID( "As  " );
    var desc36 = new ActionDescriptor();
    var idEQlt = charIDToTypeID( "EQlt" );
    desc36.putInteger( idEQlt, 12 );
    var idMttC = charIDToTypeID( "MttC" );
    var idMttC = charIDToTypeID( "MttC" );
    var idNone = charIDToTypeID( "None" );
    desc36.putEnumerated( idMttC, idMttC, idNone );
    var idJPEG = charIDToTypeID( "JPEG" );
    desc35.putObject( idAs, idJPEG, desc36 );
    var idIn = charIDToTypeID( "In  " );
    desc35.putPath( idIn, new File( file ) );
    var idDocI = charIDToTypeID( "DocI" );
    desc35.putInteger( idDocI, 1236 );
    var idsaveStage = stringIDToTypeID( "saveStage" );
    var idsaveStageType = stringIDToTypeID( "saveStageType" );
    var idsaveSucceeded = stringIDToTypeID( "saveSucceeded" );
    desc35.putEnumerated( idsaveStage, idsaveStageType, idsaveSucceeded );
    executeAction( idsave, desc35, DialogModes.NO );
};

//save png image, middle settings
function savePNG02(file){
    var idsave = charIDToTypeID( "save" );
    var desc377 = new ActionDescriptor();
    var idAs = charIDToTypeID( "As  " );
    var desc378 = new ActionDescriptor();
    var idMthd = charIDToTypeID( "Mthd" );
    var idPNGMethod = stringIDToTypeID( "PNGMethod" );
    var idquick = stringIDToTypeID( "quick" );
    desc378.putEnumerated( idMthd, idPNGMethod, idquick );
    var idPGIT = charIDToTypeID( "PGIT" );
    var idPGIT = charIDToTypeID( "PGIT" );
    var idPGIN = charIDToTypeID( "PGIN" );
    desc378.putEnumerated( idPGIT, idPGIT, idPGIN );
    var idPNGf = charIDToTypeID( "PNGf" );
    var idPNGf = charIDToTypeID( "PNGf" );
    var idPGAd = charIDToTypeID( "PGAd" );
    desc378.putEnumerated( idPNGf, idPNGf, idPGAd );
    var idCmpr = charIDToTypeID( "Cmpr" );
    desc378.putInteger( idCmpr, 6 );
    var idPNGF = charIDToTypeID( "PNGF" );
    desc377.putObject( idAs, idPNGF, desc378 );
    var idIn = charIDToTypeID( "In  " );
    desc377.putPath( idIn, new File( file ) );
    var idDocI = charIDToTypeID( "DocI" );
    desc377.putInteger( idDocI, 4364 );
    var idCpy = charIDToTypeID( "Cpy " );
    desc377.putBoolean( idCpy, true );
    var idsaveStage = stringIDToTypeID( "saveStage" );
    var idsaveStageType = stringIDToTypeID( "saveStageType" );
    var idsaveSucceeded = stringIDToTypeID( "saveSucceeded" );
    desc377.putEnumerated( idsaveStage, idsaveStageType, idsaveSucceeded );
    executeAction( idsave, desc377, DialogModes.NO );
};

//save png image, printing settings
function savePNG(file){
    var saveFile = new File(file);
    var pngOpts = new PNGSaveOptions();  
    pngOpts.quality = 12;
    pngOpts.embedColorProfile = true;
    pngOpts.formatOptions = FormatOptions.PROGRESSIVE;
    activeDocument.saveAs(saveFile, pngOpts, true, Extension.LOWERCASE); 
};

//place image
function placeImage(file,sizeW, sizeH) {
    var idslct = charIDToTypeID( "slct" );
    var desc5 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    var ref3 = new ActionReference();
    var idChnl = charIDToTypeID( "Chnl" );
    var idChnl = charIDToTypeID( "Chnl" );
    var idRGB = charIDToTypeID( "RGB " );
    ref3.putEnumerated( idChnl, idChnl, idRGB );
    desc5.putReference( idnull, ref3 );
    var idMkVs = charIDToTypeID( "MkVs" );
    desc5.putBoolean( idMkVs, false );
    executeAction( idslct, desc5, DialogModes.NO );
    var idPlc = charIDToTypeID( "Plc " );
    var desc5 = new ActionDescriptor();
    var idnull = charIDToTypeID( "null" );
    desc5.putPath( idnull, new File( file ) );
    var idFTcs = charIDToTypeID( "FTcs" );
    var idQCSt = charIDToTypeID( "QCSt" );
    var idQcsa = charIDToTypeID( "Qcsa" );
    desc5.putEnumerated( idFTcs, idQCSt, idQcsa );
    var idOfst = charIDToTypeID( "Ofst" );
    var desc6 = new ActionDescriptor();
    var idHrzn = charIDToTypeID( "Hrzn" );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc6.putUnitDouble( idHrzn, idPxl, 0.000000 );
    var idVrtc = charIDToTypeID( "Vrtc" );
    var idPxl = charIDToTypeID( "#Pxl" );
    desc6.putUnitDouble( idVrtc, idPxl, 0.000000 );
    var idOfst = charIDToTypeID( "Ofst" );
    desc5.putObject( idOfst, idOfst, desc6 );
    executeAction( idPlc, desc5, DialogModes.NO );
    activeDocument.activeLayer.resize(sizeW,sizeH,AnchorPosition.MIDDLECENTER);
    return app.activeDocument.activeLayer;
};


//recursive looping to find layer with name yes
function goThroughLayers(parentLayer){
    for(var i=0;i<parentLayer.layers.length;i++){
        replaceLayer = parentLayer.layers[i];
        if(replaceLayer.typename =='LayerSet'){
            goThroughLayers (replaceLayer);
        }
        else{
            if(replaceLayer.name == replaceName){
                app.activeDocument.activeLayer = replaceLayer;
                break;
            }
        }
    }
};

//main function
function main(){
    
    //get png files
    var pngFolder = new Folder(scriptPath+"/png files/");
    var pngFiles = pngFolder.getFiles("*.png");
    
    //get psd mockups files
    var mockupsFolder = new Folder(scriptPath+"/mockups/");
    var mockupsFiles = mockupsFolder.getFiles("*.psd");
    
    //create output folders
    createFolder(scriptPath+"/output");

    //loop png files
    for(var a = 0;a<pngFiles.length;a++){
        //get filename
        var filename = pngFiles[a].name.slice(0,-4);
        //create folders
        createFolder(scriptPath+"/output/"+ filename);
        createFolder(scriptPath+"/output/"+ filename +"/"+ filename +"-assets");
        createFolder(scriptPath+"/output/"+ filename +"/mockups");
        
        //loop and open mockup
        for(var b = 0;b<mockupsFiles.length;b++){
            //open mockup file
            var mockupDocument = app.open(mockupsFiles[b]);
            var mockupName = mockupsFiles[b].name.slice(0,-4);
            app.activeDocument = mockupDocument;
            //find replace layer
            goThroughLayers(mockupDocument);
            //open smart object
            app.runMenuItem(stringIDToTypeID('placedLayerEditContents'));
            //get already existing layer
            var prevLayer = app.activeDocument.activeLayer;
            //place file
            placeImage(pngFiles[a],100,100);


    var width = app.activeDocument.width.as('px');  
    var height =app.activeDocument.height.as('px'); 
           var bounds = app.activeDocument.activeLayer.bounds;  
var layerWidth = bounds[2].as('px')-bounds[0].as('px');  
var layerHeight = bounds[3].as('px')-bounds[1].as('px'); 
app.activeDocument.activeLayer.translate(new UnitValue(0-app.activeDocument.activeLayer.bounds[0].as('px'),'px'), new UnitValue(0-app.activeDocument.activeLayer.bounds[1].as('px'),'px')); 
app.activeDocument.activeLayer.resize( (width/layerWidth)*100,(height/layerHeight)*100,AnchorPosition.TOPLEFT);

            //turn off previous layer
            prevLayer.visible = false;
         
            //save
            app.activeDocument.save();
            //get history
            var savedState = app.activeDocument.activeHistoryState;


            //resize and save
            for(var k in exportSizes){
                 
                var info = exportSizes[k].split("-");
                var width = Number(info[0].split("x")[0]);
                var height = Number(info[0].split("x")[1]);  

//resize image
                var idImgS = charIDToTypeID( "ImgS" );
var desc14 = new ActionDescriptor();
var idWdth = charIDToTypeID( "Wdth" );
var idPxl = charIDToTypeID( "#Pxl" );
desc14.putUnitDouble( idWdth, idPxl, width );
var idHght = charIDToTypeID( "Hght" );
var idPxl = charIDToTypeID( "#Pxl" );
desc14.putUnitDouble( idHght, idPxl, height );
var idRslt = charIDToTypeID( "Rslt" );
var idRsl = charIDToTypeID( "#Rsl" );
desc14.putUnitDouble( idRslt, idRsl, 300 );
var idIntr = charIDToTypeID( "Intr" );
var idIntp = charIDToTypeID( "Intp" );
var idautomaticInterpolation = stringIDToTypeID( "automaticInterpolation" );
desc14.putEnumerated( idIntr, idIntp, idautomaticInterpolation );
executeAction( idImgS, desc14, DialogModes.NO ); 
 
//save export
                saveJPG(scriptPath+"/output/"+ filename +"/"+ filename +"-assets/"+ info[1] +".png");
            }
            //restore original size
            app.activeDocument.activeHistoryState = savedState;
            //close smart object
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
            //save mockup
            saveJPG(scriptPath+"/output/"+ filename +"/mockups/"+ mockupName +".png");
   //merge layers
            var idFltI = charIDToTypeID( "FltI" );
            executeAction( idFltI, undefined, DialogModes.NO );

            //close mockup
            app.activeDocument.close(SaveOptions.DONOTSAVECHANGES);
        }
        
        
        
    }
    //DONE
    alert("done");
};

//start

main();
