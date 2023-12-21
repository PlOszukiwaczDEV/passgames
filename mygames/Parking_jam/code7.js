gdjs.Level_327Code = {};
gdjs.Level_327Code.GDEndMessage_9595TextObjects1= [];
gdjs.Level_327Code.GDEndMessage_9595TextObjects2= [];
gdjs.Level_327Code.GDEndMessage_9595TextObjects3= [];
gdjs.Level_327Code.GDSpeedrunResults_9595TextObjects1= [];
gdjs.Level_327Code.GDSpeedrunResults_9595TextObjects2= [];
gdjs.Level_327Code.GDSpeedrunResults_9595TextObjects3= [];
gdjs.Level_327Code.GDRestartGame_9595TextObjects1= [];
gdjs.Level_327Code.GDRestartGame_9595TextObjects2= [];
gdjs.Level_327Code.GDRestartGame_9595TextObjects3= [];
gdjs.Level_327Code.GDSubmitScore_9595TextObjects1= [];
gdjs.Level_327Code.GDSubmitScore_9595TextObjects2= [];
gdjs.Level_327Code.GDSubmitScore_9595TextObjects3= [];
gdjs.Level_327Code.GDPlayername_9595InputObjects1= [];
gdjs.Level_327Code.GDPlayername_9595InputObjects2= [];
gdjs.Level_327Code.GDPlayername_9595InputObjects3= [];
gdjs.Level_327Code.GDCoinIconObjects1= [];
gdjs.Level_327Code.GDCoinIconObjects2= [];
gdjs.Level_327Code.GDCoinIconObjects3= [];
gdjs.Level_327Code.GDCoinObjects1= [];
gdjs.Level_327Code.GDCoinObjects2= [];
gdjs.Level_327Code.GDCoinObjects3= [];
gdjs.Level_327Code.GDCarObjects1= [];
gdjs.Level_327Code.GDCarObjects2= [];
gdjs.Level_327Code.GDCarObjects3= [];
gdjs.Level_327Code.GDObstacleObjects1= [];
gdjs.Level_327Code.GDObstacleObjects2= [];
gdjs.Level_327Code.GDObstacleObjects3= [];
gdjs.Level_327Code.GDParkingLotObjects1= [];
gdjs.Level_327Code.GDParkingLotObjects2= [];
gdjs.Level_327Code.GDParkingLotObjects3= [];
gdjs.Level_327Code.GDScore_9595TextObjects1= [];
gdjs.Level_327Code.GDScore_9595TextObjects2= [];
gdjs.Level_327Code.GDScore_9595TextObjects3= [];
gdjs.Level_327Code.GDBlackOverlayObjects1= [];
gdjs.Level_327Code.GDBlackOverlayObjects2= [];
gdjs.Level_327Code.GDBlackOverlayObjects3= [];
gdjs.Level_327Code.GDMainButton_9595TextObjects1= [];
gdjs.Level_327Code.GDMainButton_9595TextObjects2= [];
gdjs.Level_327Code.GDMainButton_9595TextObjects3= [];
gdjs.Level_327Code.GDStartOver_9595TextObjects1= [];
gdjs.Level_327Code.GDStartOver_9595TextObjects2= [];
gdjs.Level_327Code.GDStartOver_9595TextObjects3= [];
gdjs.Level_327Code.GDBlankButtonObjects1= [];
gdjs.Level_327Code.GDBlankButtonObjects2= [];
gdjs.Level_327Code.GDBlankButtonObjects3= [];
gdjs.Level_327Code.GDCurrentLevel_9595TextObjects1= [];
gdjs.Level_327Code.GDCurrentLevel_9595TextObjects2= [];
gdjs.Level_327Code.GDCurrentLevel_9595TextObjects3= [];
gdjs.Level_327Code.GDCollisionDustObjects1= [];
gdjs.Level_327Code.GDCollisionDustObjects2= [];
gdjs.Level_327Code.GDCollisionDustObjects3= [];
gdjs.Level_327Code.GDGoUpObjects1= [];
gdjs.Level_327Code.GDGoUpObjects2= [];
gdjs.Level_327Code.GDGoUpObjects3= [];
gdjs.Level_327Code.GDGoLeftObjects1= [];
gdjs.Level_327Code.GDGoLeftObjects2= [];
gdjs.Level_327Code.GDGoLeftObjects3= [];
gdjs.Level_327Code.GDGoDownObjects1= [];
gdjs.Level_327Code.GDGoDownObjects2= [];
gdjs.Level_327Code.GDGoDownObjects3= [];
gdjs.Level_327Code.GDGoRightObjects1= [];
gdjs.Level_327Code.GDGoRightObjects2= [];
gdjs.Level_327Code.GDGoRightObjects3= [];
gdjs.Level_327Code.GDSpeedRunTime_9595TextObjects1= [];
gdjs.Level_327Code.GDSpeedRunTime_9595TextObjects2= [];
gdjs.Level_327Code.GDSpeedRunTime_9595TextObjects3= [];
gdjs.Level_327Code.GDGrassObjects1= [];
gdjs.Level_327Code.GDGrassObjects2= [];
gdjs.Level_327Code.GDGrassObjects3= [];
gdjs.Level_327Code.GDPauseButtonObjects1= [];
gdjs.Level_327Code.GDPauseButtonObjects2= [];
gdjs.Level_327Code.GDPauseButtonObjects3= [];


gdjs.Level_327Code.mapOfGDgdjs_9546Level_9595327Code_9546GDCarObjects2Objects = Hashtable.newFrom({"Car": gdjs.Level_327Code.GDCarObjects2});
gdjs.Level_327Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.Level_327Code.GDCarObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_327Code.mapOfGDgdjs_9546Level_9595327Code_9546GDCarObjects2Objects, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) + gdjs.randomInRange(-(gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0)) / 2, gdjs.evtTools.camera.getCameraWidth(runtimeScene, "", 0) / 2), gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) / 2, "");
}{for(var i = 0, len = gdjs.Level_327Code.GDCarObjects2.length ;i < len;++i) {
    gdjs.Level_327Code.GDCarObjects2[i].activateBehavior("DraggablePhysics", false);
}
}{for(var i = 0, len = gdjs.Level_327Code.GDCarObjects2.length ;i < len;++i) {
    gdjs.Level_327Code.GDCarObjects2[i].pauseAnimation();
}
}{for(var i = 0, len = gdjs.Level_327Code.GDCarObjects2.length ;i < len;++i) {
    gdjs.Level_327Code.GDCarObjects2[i].setAnimationFrame(gdjs.randomInRange(0, 8));
}
}{for(var i = 0, len = gdjs.Level_327Code.GDCarObjects2.length ;i < len;++i) {
    gdjs.Level_327Code.GDCarObjects2[i].setZOrder(0);
}
}{for(var i = 0, len = gdjs.Level_327Code.GDCarObjects2.length ;i < len;++i) {
    gdjs.Level_327Code.GDCarObjects2[i].getBehavior("Physics2").setFixedRotation(false);
}
}{for(var i = 0, len = gdjs.Level_327Code.GDCarObjects2.length ;i < len;++i) {
    gdjs.Level_327Code.GDCarObjects2[i].setAngle(gdjs.randomInRange(0, 360));
}
}{for(var i = 0, len = gdjs.Level_327Code.GDCarObjects2.length ;i < len;++i) {
    gdjs.Level_327Code.GDCarObjects2[i].getBehavior("Physics2").applyPolarImpulse(gdjs.randomInRange(235, 315), 50, (gdjs.Level_327Code.GDCarObjects2[i].getCenterXInScene()), (gdjs.Level_327Code.GDCarObjects2[i].getCenterYInScene()));
}
}}

}


};gdjs.Level_327Code.eventsList1 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "SpawnCars", 0.5, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {

{ //Subevents
gdjs.Level_327Code.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Car"), gdjs.Level_327Code.GDCarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level_327Code.GDCarObjects1.length;i<l;++i) {
    if ( gdjs.Level_327Code.GDCarObjects1[i].getCenterYInScene() > gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + gdjs.evtTools.camera.getCameraHeight(runtimeScene, "", 0) ) {
        isConditionTrue_0 = true;
        gdjs.Level_327Code.GDCarObjects1[k] = gdjs.Level_327Code.GDCarObjects1[i];
        ++k;
    }
}
gdjs.Level_327Code.GDCarObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level_327Code.GDCarObjects1 */
{for(var i = 0, len = gdjs.Level_327Code.GDCarObjects1.length ;i < len;++i) {
    gdjs.Level_327Code.GDCarObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Level_327Code.asyncCallback13672124 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("SpeedrunResults_Text"), gdjs.Level_327Code.GDSpeedrunResults_9595TextObjects3);
{for(var i = 0, len = gdjs.Level_327Code.GDSpeedrunResults_9595TextObjects3.length ;i < len;++i) {
    gdjs.Level_327Code.GDSpeedrunResults_9595TextObjects3[i].setString("Time: " + gdjs.evtsExt__ExtendedMath__ToFixedString.func(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("SpeedrunTime")), 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + " seconds");
}
}{gdjs.evtTools.camera.showLayer(runtimeScene, "Speedrun");
}}
gdjs.Level_327Code.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.Level_327Code.asyncCallback13672124(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level_327Code.eventsList3 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.Level_327Code.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Level_327Code.mapOfGDgdjs_9546Level_9595327Code_9546GDRestartGame_95959595TextObjects2Objects = Hashtable.newFrom({"RestartGame_Text": gdjs.Level_327Code.GDRestartGame_9595TextObjects2});
gdjs.Level_327Code.asyncCallback13675196 = function (runtimeScene, asyncObjectsList) {
{runtimeScene.getGame().getVariables().get("CurrentLevel").setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title Screen", false);
}}
gdjs.Level_327Code.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.25), (runtimeScene) => (gdjs.Level_327Code.asyncCallback13675196(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level_327Code.eventsList5 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("RestartGame_Text"), gdjs.Level_327Code.GDRestartGame_9595TextObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Level_327Code.mapOfGDgdjs_9546Level_9595327Code_9546GDRestartGame_95959595TextObjects2Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Coin.wav", false, 50, 2);
}
{ //Subevents
gdjs.Level_327Code.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.Level_327Code.mapOfGDgdjs_9546Level_9595327Code_9546GDSubmitScore_95959595TextObjects2Objects = Hashtable.newFrom({"SubmitScore_Text": gdjs.Level_327Code.GDSubmitScore_9595TextObjects2});
gdjs.Level_327Code.mapOfGDgdjs_9546Level_9595327Code_9546GDSubmitScore_95959595TextObjects2Objects = Hashtable.newFrom({"SubmitScore_Text": gdjs.Level_327Code.GDSubmitScore_9595TextObjects2});
gdjs.Level_327Code.mapOfGDgdjs_9546Level_9595327Code_9546GDBlankButtonObjects2Objects = Hashtable.newFrom({"BlankButton": gdjs.Level_327Code.GDBlankButtonObjects2});
gdjs.Level_327Code.mapOfGDgdjs_9546Level_9595327Code_9546GDSubmitScore_95959595TextObjects2Objects = Hashtable.newFrom({"SubmitScore_Text": gdjs.Level_327Code.GDSubmitScore_9595TextObjects2});
gdjs.Level_327Code.eventsList6 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.hasSavingErrored("868daa2e-2d2a-45d6-9b48-58af2903a5a5");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlankButton"), gdjs.Level_327Code.GDBlankButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Playername_Input"), gdjs.Level_327Code.GDPlayername_9595InputObjects2);
gdjs.copyArray(runtimeScene.getObjects("SubmitScore_Text"), gdjs.Level_327Code.GDSubmitScore_9595TextObjects2);
{for(var i = 0, len = gdjs.Level_327Code.GDSubmitScore_9595TextObjects2.length ;i < len;++i) {
    gdjs.Level_327Code.GDSubmitScore_9595TextObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level_327Code.GDBlankButtonObjects2.length ;i < len;++i) {
    gdjs.Level_327Code.GDBlankButtonObjects2[i].hide(false);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("ScoreSubmitted"), false);
}{for(var i = 0, len = gdjs.Level_327Code.GDPlayername_9595InputObjects2.length ;i < len;++i) {
    gdjs.Level_327Code.GDPlayername_9595InputObjects2[i].setDisabled(false);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.hasBeenSaved("868daa2e-2d2a-45d6-9b48-58af2903a5a5");
if (isConditionTrue_0) {
{gdjs.evtTools.leaderboards.displayLeaderboard(runtimeScene, "868daa2e-2d2a-45d6-9b48-58af2903a5a5", true);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Title Screen", true);
}}

}


};gdjs.Level_327Code.eventsList7 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("BlankButton"), gdjs.Level_327Code.GDBlankButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("SubmitScore_Text"), gdjs.Level_327Code.GDSubmitScore_9595TextObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.leaderboards.isSaving("868daa2e-2d2a-45d6-9b48-58af2903a5a5");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_327Code.mapOfGDgdjs_9546Level_9595327Code_9546GDBlankButtonObjects2Objects, gdjs.Level_327Code.mapOfGDgdjs_9546Level_9595327Code_9546GDSubmitScore_95959595TextObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13682100);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level_327Code.GDBlankButtonObjects2 */
/* Reuse gdjs.Level_327Code.GDSubmitScore_9595TextObjects2 */
{for(var i = 0, len = gdjs.Level_327Code.GDSubmitScore_9595TextObjects2.length ;i < len;++i) {
    gdjs.Level_327Code.GDSubmitScore_9595TextObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Level_327Code.GDBlankButtonObjects2.length ;i < len;++i) {
    gdjs.Level_327Code.GDBlankButtonObjects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.leaderboards.isSaving("868daa2e-2d2a-45d6-9b48-58af2903a5a5"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13683052);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Level_327Code.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.Level_327Code.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SubmitScore_Text"), gdjs.Level_327Code.GDSubmitScore_9595TextObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("ScoreSubmitted"), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Level_327Code.mapOfGDgdjs_9546Level_9595327Code_9546GDSubmitScore_95959595TextObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.isAuthenticated();
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Playername_Input"), gdjs.Level_327Code.GDPlayername_9595InputObjects2);
{gdjs.evtTools.leaderboards.saveConnectedPlayerScore(runtimeScene, "868daa2e-2d2a-45d6-9b48-58af2903a5a5", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("SpeedrunTime")));
}{gdjs.evtTools.leaderboards.saveConnectedPlayerScore(runtimeScene, "b2d45fb1-544a-4049-9ef1-be2d3ee491e8", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("ScoreSubmitted"), true);
}{for(var i = 0, len = gdjs.Level_327Code.GDPlayername_9595InputObjects2.length ;i < len;++i) {
    gdjs.Level_327Code.GDPlayername_9595InputObjects2[i].setDisabled(true);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Coin.wav", false, 50, 2);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("SubmitScore_Text"), gdjs.Level_327Code.GDSubmitScore_9595TextObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("ScoreSubmitted"), false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Level_327Code.mapOfGDgdjs_9546Level_9595327Code_9546GDSubmitScore_95959595TextObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.playerAuthentication.isAuthenticated());
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Playername_Input"), gdjs.Level_327Code.GDPlayername_9595InputObjects2);
{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "868daa2e-2d2a-45d6-9b48-58af2903a5a5", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("SpeedrunTime")), (( gdjs.Level_327Code.GDPlayername_9595InputObjects2.length === 0 ) ? "" :gdjs.Level_327Code.GDPlayername_9595InputObjects2[0].getText()));
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, "b2d45fb1-544a-4049-9ef1-be2d3ee491e8", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().get("Score")), (( gdjs.Level_327Code.GDPlayername_9595InputObjects2.length === 0 ) ? "" :gdjs.Level_327Code.GDPlayername_9595InputObjects2[0].getText()));
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("ScoreSubmitted"), true);
}{for(var i = 0, len = gdjs.Level_327Code.GDPlayername_9595InputObjects2.length ;i < len;++i) {
    gdjs.Level_327Code.GDPlayername_9595InputObjects2[i].setDisabled(true);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Coin.wav", false, 50, 2);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("ScoreSubmitted"), true);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Level_327Code.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.Level_327Code.eventsList9 = function(runtimeScene) {

{


gdjs.Level_327Code.eventsList5(runtimeScene);
}


{


gdjs.Level_327Code.eventsList8(runtimeScene);
}


};gdjs.Level_327Code.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlankButton"), gdjs.Level_327Code.GDBlankButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Playername_Input"), gdjs.Level_327Code.GDPlayername_9595InputObjects2);
gdjs.copyArray(runtimeScene.getObjects("RestartGame_Text"), gdjs.Level_327Code.GDRestartGame_9595TextObjects2);
gdjs.copyArray(runtimeScene.getObjects("SpeedRunTime_Text"), gdjs.Level_327Code.GDSpeedRunTime_9595TextObjects2);
gdjs.copyArray(runtimeScene.getObjects("SubmitScore_Text"), gdjs.Level_327Code.GDSubmitScore_9595TextObjects2);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\audio\\audience_cheers_13.aac", 10, false, 50, 1);
}{for(var i = 0, len = gdjs.Level_327Code.GDRestartGame_9595TextObjects2.length ;i < len;++i) {
    gdjs.Level_327Code.GDRestartGame_9595TextObjects2[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.Level_327Code.GDSubmitScore_9595TextObjects2.length ;i < len;++i) {
    gdjs.Level_327Code.GDSubmitScore_9595TextObjects2[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.Level_327Code.GDSpeedRunTime_9595TextObjects2.length ;i < len;++i) {
    gdjs.Level_327Code.GDSpeedRunTime_9595TextObjects2[i].setCenterXInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.Level_327Code.GDRestartGame_9595TextObjects2.length ;i < len;++i) {
    gdjs.Level_327Code.GDRestartGame_9595TextObjects2[i].setCenterXInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.Level_327Code.GDSubmitScore_9595TextObjects2.length ;i < len;++i) {
    gdjs.Level_327Code.GDSubmitScore_9595TextObjects2[i].setCenterXInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0));
}
for(var i = 0, len = gdjs.Level_327Code.GDPlayername_9595InputObjects2.length ;i < len;++i) {
    gdjs.Level_327Code.GDPlayername_9595InputObjects2[i].setCenterXInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0));
}
}{for(var i = 0, len = gdjs.Level_327Code.GDBlankButtonObjects2.length ;i < len;++i) {
    gdjs.Level_327Code.GDBlankButtonObjects2[i].setCenterXInScene(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0));
}
}{gdjs.evtTools.camera.hideLayer(runtimeScene, "Speedrun");
}
{ //Subevents
gdjs.Level_327Code.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.playerAuthentication.isAuthenticated();
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Playername_Input"), gdjs.Level_327Code.GDPlayername_9595InputObjects2);
{for(var i = 0, len = gdjs.Level_327Code.GDPlayername_9595InputObjects2.length ;i < len;++i) {
    gdjs.Level_327Code.GDPlayername_9595InputObjects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.layerIsVisible(runtimeScene, "Speedrun");
if (isConditionTrue_0) {

{ //Subevents
gdjs.Level_327Code.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.Level_327Code.eventsList11 = function(runtimeScene) {

{


gdjs.Level_327Code.eventsList1(runtimeScene);
}


{


gdjs.Level_327Code.eventsList10(runtimeScene);
}


};

gdjs.Level_327Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_327Code.GDEndMessage_9595TextObjects1.length = 0;
gdjs.Level_327Code.GDEndMessage_9595TextObjects2.length = 0;
gdjs.Level_327Code.GDEndMessage_9595TextObjects3.length = 0;
gdjs.Level_327Code.GDSpeedrunResults_9595TextObjects1.length = 0;
gdjs.Level_327Code.GDSpeedrunResults_9595TextObjects2.length = 0;
gdjs.Level_327Code.GDSpeedrunResults_9595TextObjects3.length = 0;
gdjs.Level_327Code.GDRestartGame_9595TextObjects1.length = 0;
gdjs.Level_327Code.GDRestartGame_9595TextObjects2.length = 0;
gdjs.Level_327Code.GDRestartGame_9595TextObjects3.length = 0;
gdjs.Level_327Code.GDSubmitScore_9595TextObjects1.length = 0;
gdjs.Level_327Code.GDSubmitScore_9595TextObjects2.length = 0;
gdjs.Level_327Code.GDSubmitScore_9595TextObjects3.length = 0;
gdjs.Level_327Code.GDPlayername_9595InputObjects1.length = 0;
gdjs.Level_327Code.GDPlayername_9595InputObjects2.length = 0;
gdjs.Level_327Code.GDPlayername_9595InputObjects3.length = 0;
gdjs.Level_327Code.GDCoinIconObjects1.length = 0;
gdjs.Level_327Code.GDCoinIconObjects2.length = 0;
gdjs.Level_327Code.GDCoinIconObjects3.length = 0;
gdjs.Level_327Code.GDCoinObjects1.length = 0;
gdjs.Level_327Code.GDCoinObjects2.length = 0;
gdjs.Level_327Code.GDCoinObjects3.length = 0;
gdjs.Level_327Code.GDCarObjects1.length = 0;
gdjs.Level_327Code.GDCarObjects2.length = 0;
gdjs.Level_327Code.GDCarObjects3.length = 0;
gdjs.Level_327Code.GDObstacleObjects1.length = 0;
gdjs.Level_327Code.GDObstacleObjects2.length = 0;
gdjs.Level_327Code.GDObstacleObjects3.length = 0;
gdjs.Level_327Code.GDParkingLotObjects1.length = 0;
gdjs.Level_327Code.GDParkingLotObjects2.length = 0;
gdjs.Level_327Code.GDParkingLotObjects3.length = 0;
gdjs.Level_327Code.GDScore_9595TextObjects1.length = 0;
gdjs.Level_327Code.GDScore_9595TextObjects2.length = 0;
gdjs.Level_327Code.GDScore_9595TextObjects3.length = 0;
gdjs.Level_327Code.GDBlackOverlayObjects1.length = 0;
gdjs.Level_327Code.GDBlackOverlayObjects2.length = 0;
gdjs.Level_327Code.GDBlackOverlayObjects3.length = 0;
gdjs.Level_327Code.GDMainButton_9595TextObjects1.length = 0;
gdjs.Level_327Code.GDMainButton_9595TextObjects2.length = 0;
gdjs.Level_327Code.GDMainButton_9595TextObjects3.length = 0;
gdjs.Level_327Code.GDStartOver_9595TextObjects1.length = 0;
gdjs.Level_327Code.GDStartOver_9595TextObjects2.length = 0;
gdjs.Level_327Code.GDStartOver_9595TextObjects3.length = 0;
gdjs.Level_327Code.GDBlankButtonObjects1.length = 0;
gdjs.Level_327Code.GDBlankButtonObjects2.length = 0;
gdjs.Level_327Code.GDBlankButtonObjects3.length = 0;
gdjs.Level_327Code.GDCurrentLevel_9595TextObjects1.length = 0;
gdjs.Level_327Code.GDCurrentLevel_9595TextObjects2.length = 0;
gdjs.Level_327Code.GDCurrentLevel_9595TextObjects3.length = 0;
gdjs.Level_327Code.GDCollisionDustObjects1.length = 0;
gdjs.Level_327Code.GDCollisionDustObjects2.length = 0;
gdjs.Level_327Code.GDCollisionDustObjects3.length = 0;
gdjs.Level_327Code.GDGoUpObjects1.length = 0;
gdjs.Level_327Code.GDGoUpObjects2.length = 0;
gdjs.Level_327Code.GDGoUpObjects3.length = 0;
gdjs.Level_327Code.GDGoLeftObjects1.length = 0;
gdjs.Level_327Code.GDGoLeftObjects2.length = 0;
gdjs.Level_327Code.GDGoLeftObjects3.length = 0;
gdjs.Level_327Code.GDGoDownObjects1.length = 0;
gdjs.Level_327Code.GDGoDownObjects2.length = 0;
gdjs.Level_327Code.GDGoDownObjects3.length = 0;
gdjs.Level_327Code.GDGoRightObjects1.length = 0;
gdjs.Level_327Code.GDGoRightObjects2.length = 0;
gdjs.Level_327Code.GDGoRightObjects3.length = 0;
gdjs.Level_327Code.GDSpeedRunTime_9595TextObjects1.length = 0;
gdjs.Level_327Code.GDSpeedRunTime_9595TextObjects2.length = 0;
gdjs.Level_327Code.GDSpeedRunTime_9595TextObjects3.length = 0;
gdjs.Level_327Code.GDGrassObjects1.length = 0;
gdjs.Level_327Code.GDGrassObjects2.length = 0;
gdjs.Level_327Code.GDGrassObjects3.length = 0;
gdjs.Level_327Code.GDPauseButtonObjects1.length = 0;
gdjs.Level_327Code.GDPauseButtonObjects2.length = 0;
gdjs.Level_327Code.GDPauseButtonObjects3.length = 0;

gdjs.Level_327Code.eventsList11(runtimeScene);

return;

}

gdjs['Level_327Code'] = gdjs.Level_327Code;
