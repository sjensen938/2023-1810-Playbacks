
function loadPlaybackData(playbackData) {
    playbackData.comments = {"be0e2ac8-df8e-471e-8a6b-3312e766ecbc":[{"id":"28752ab6-1bb8-4b7d-9090-57248eaed5ce","displayCommentEventId":"be0e2ac8-df8e-471e-8a6b-3312e766ecbc","displayCommentEventSequenceNumber":0,"developerGroupId":"a9b2c97a-b8bf-47d0-8087-50167cf906be","timestamp":1696529423167,"commentText":"A playback introducing some more advanced vector methods, through the medium of adding and deleting students from a class roster.","commentTitle":"","position":0,"selectedCodeBlocks":[],"imageURLs":[],"videoURLs":[],"audioURLs":[],"linesAbove":0,"linesBelow":0,"currentFilePath":"","viewableBlogText":"","commentTags":[],"questionCommentData":null}],"84599b91-a4c6-44e0-9ae6-8bcc9bc0e6e1":[{"id":"951dd6bd-008f-4a07-9151-0fb23957bcf6","displayCommentEventId":"84599b91-a4c6-44e0-9ae6-8bcc9bc0e6e1","displayCommentEventSequenceNumber":349,"developerGroupId":"e463fb4f-b490-4318-b425-a23e16f565a7","timestamp":1696538180165,"commentText":"We begin by creating our original roster.&nbsp; Recall that we have several ways to declare a vector and initialize it.&nbsp; Here, we chose the option of listing the initial elements of the vector between braces {} and separated by commas.<div><br></div><div>We have listed our original class members in alphabetical order.</div>","commentTitle":"","position":0,"selectedCodeBlocks":[{"fileId":"3d8c292d-70d4-4b9a-83ca-7a0f94f427b1","selectedText":"vector <string> roster = {\"Ainsley\",\"Alex\",\"Bella\",\"Cassie\",\"Emmanuel\",\"Quartz\",\"Reid\",\"Sam\",\"Tj\"};","startRow":9,"startColumn":4,"endRow":9,"endColumn":103}],"imageURLs":[],"videoURLs":[],"audioURLs":[],"linesAbove":0,"linesBelow":0,"currentFilePath":"/main.cpp","viewableBlogText":"    vector <string> roster = {\"Ainsley\",\"Alex\",\"Bella\",\"Cassie\",\"Emmanuel\",\"Quartz\",\"Reid\",\"Sam\",\"Tj\"};","commentTags":[],"questionCommentData":null}],"e00d76a5-44fa-4886-bcd3-27bf9720324c":[{"id":"7c86daa0-2dc9-4620-90ab-2e0055e5f163","displayCommentEventId":"e00d76a5-44fa-4886-bcd3-27bf9720324c","displayCommentEventSequenceNumber":501,"developerGroupId":"e463fb4f-b490-4318-b425-a23e16f565a7","timestamp":1696538602693,"commentText":"Just as with arrays or strings, we can print the elements of a vector (and their corresponding indices) very easily and concisely with a for loop.&nbsp;&nbsp;<div><br></div><div>The only main difference in this looping procedures from that of arrays is that we don't need to know the size of the vector to create the loop; the vector's <span style=\"font-family: Courier;\">size()</span> method will determine that value for us.&nbsp; The screenshot below shows what is printed to the console from line 14.</div><div><br></div><div>Strings use a <span style=\"font-family: Courier;\">.length()</span> method to determine the number of characters in the string.&nbsp; Because vectors use <span style=\"font-family: Courier;\">.size()</span> instead, the string library has been updated to allow a <span style=\"font-family: Courier;\">.size()</span> method also in case you'd like to keep track of only one method name for determining length/size.</div>","commentTitle":"","position":0,"selectedCodeBlocks":[{"fileId":"3d8c292d-70d4-4b9a-83ca-7a0f94f427b1","selectedText":"        cout << i << \" \" << roster[i] << endl;","startRow":13,"startColumn":0,"endRow":13,"endColumn":46}],"imageURLs":["media/images/1696538527921-Roster1.png"],"videoURLs":[],"audioURLs":[],"linesAbove":2,"linesBelow":1,"currentFilePath":"/main.cpp","viewableBlogText":"    for(int i = 0; i < roster.size();i++)\n    {\n        cout << i << \" \" << roster[i] << endl;\n    }","commentTags":["image"],"questionCommentData":null}],"b89abda3-98ad-4828-85ca-4eb921001c7b":[{"id":"76040bf1-05ea-41f8-b966-1b63108df52f","displayCommentEventId":"b89abda3-98ad-4828-85ca-4eb921001c7b","displayCommentEventSequenceNumber":779,"developerGroupId":"e463fb4f-b490-4318-b425-a23e16f565a7","timestamp":1696538838215,"commentText":"We will create a screen that allows the user to either add or remove a class member, but we will want to repeat this process until the user decides they have finished.&nbsp; When writing these types of loops, I often write the exit condition for the loop <span style=\"font-style: italic;\">first,</span> even though this exit condition will eventually appear at the <span style=\"font-style: italic;\">end</span> of the loop.&nbsp; I do this to make sure I don't accidentally create an infinite loop by forgetting to add it later.<div><br></div><div>Note also the way I have structured the <span style=\"font-family: Courier;\">keep_going</span> condition.&nbsp; If the user follows directions and enters yes or no, the program will behave as expected.&nbsp; But if the user enters something like \"exit\", the program will stop running.</div><div><br></div>","commentTitle":"","position":0,"selectedCodeBlocks":[{"fileId":"3d8c292d-70d4-4b9a-83ca-7a0f94f427b1","selectedText":"  while(keep_going == \"yes\")\n    {\n        //first code the prompt allowing us to exit the loop\n        cout << \"Would you like to perform another roster action?  Please answer yes or no:\";\n        cin >> keep_going;\n    }","startRow":17,"startColumn":2,"endRow":22,"endColumn":5}],"imageURLs":[],"videoURLs":[],"audioURLs":[],"linesAbove":1,"linesBelow":0,"currentFilePath":"/main.cpp","viewableBlogText":"    string keep_going = \"yes\";\n    while(keep_going == \"yes\")\n    {\n        //first code the prompt allowing us to exit the loop\n        cout << \"Would you like to perform another roster action?  Please answer yes or no:\";\n        cin >> keep_going;\n    }","commentTags":[],"questionCommentData":null}],"db4eab98-af33-4d67-830c-c0e366db28dc":[{"id":"389ee121-4a32-46dd-92e6-5346d1997dc6","displayCommentEventId":"db4eab98-af33-4d67-830c-c0e366db28dc","displayCommentEventSequenceNumber":1277,"developerGroupId":"e463fb4f-b490-4318-b425-a23e16f565a7","timestamp":1696539241558,"commentText":"Because we wish to print the menu to the user once no matter what, I often structure loops this way:<div>1) First, create the variable that controls the loop (here, <span style=\"font-family: Courier;\">action</span>).&nbsp; Initialize that variable to pass the looping condition in order to be sure you enter the loop (here, we will show the menu again to the user whenever they have NOT entered a recognizable option, namely, anything other than 1 or 2).</div><div>2)&nbsp; Display the menu to the user.</div><div>3) Check their input again at the end of the loop.&nbsp; In the case that the user has entered bad data, print an error message.</div><div><br></div><div>The net result of this structure is that the flow of control is sure to enter the loop at least once.&nbsp; The loop will continue with any bad input, displaying an error message to the user if they enter bad data.&nbsp; &nbsp;The code shown below gives an alternative way to achieve the same result, but has more typing.</div>","commentTitle":"","position":0,"selectedCodeBlocks":[{"fileId":"3d8c292d-70d4-4b9a-83ca-7a0f94f427b1","selectedText":"      int action = 0;\n        while (action < 1 || action > 2)\n        {\n            cout << \"Please select from the following actions:\" << endl;\n            cout << \"1. Remove a student\" << endl;\n            cout << \"2. Add a student\" << endl;\n            cin >> action;\n            if(action < 1 || action > 2)\n            {\n                cout << \"Sorry, you must enter a number between 1 and 2.\" << endl;\n            }\n        }","startRow":19,"startColumn":2,"endRow":30,"endColumn":9}],"imageURLs":["media/images/1696600465978-AlternateDataValidation.png"],"videoURLs":[],"audioURLs":[],"linesAbove":0,"linesBelow":0,"currentFilePath":"/main.cpp","viewableBlogText":"        int action = 0;\n        while (action < 1 || action > 2)\n        {\n            cout << \"Please select from the following actions:\" << endl;\n            cout << \"1. Remove a student\" << endl;\n            cout << \"2. Add a student\" << endl;\n            cin >> action;\n            if(action < 1 || action > 2)\n            {\n                cout << \"Sorry, you must enter a number between 1 and 2.\" << endl;\n            }\n        }","commentTags":["image"],"questionCommentData":null},{"id":"60fa7525-1970-461e-b932-c88ce31b9246","displayCommentEventId":"db4eab98-af33-4d67-830c-c0e366db28dc","displayCommentEventSequenceNumber":1277,"developerGroupId":"e463fb4f-b490-4318-b425-a23e16f565a7","timestamp":1696539241558,"commentText":"Because we wish to print the menu to the user once no matter what, I often structure loops this way:<div>1) First, create the variable that controls the loop (here, <span style=\"font-family: Courier;\">action</span>).&nbsp; Initialize that variable to pass the looping condition in order to be sure you enter the loop (here, we will show the menu again to the user whenever they have NOT entered a recognizable option, namely, anything other than 1 or 2).</div><div>2)&nbsp; Display the menu to the user.</div><div>3) Check their input again at the end of the loop.&nbsp; In the case that the user has entered bad data, print an error message.</div><div><br></div><div>The net result of this structure is that the flow of control is sure to enter the loop at least once.&nbsp; The loop will continue with any bad input, displaying an error message to the user if they enter bad data.&nbsp; In the case that the user never enters bad data, the error message is not displayed.&nbsp; &nbsp;</div>","commentTitle":"","position":1,"selectedCodeBlocks":[{"fileId":"3d8c292d-70d4-4b9a-83ca-7a0f94f427b1","selectedText":"      int action = 0;\n        while (action < 1 || action > 2)\n        {\n            cout << \"Please select from the following actions:\" << endl;\n            cout << \"1. Remove a student\" << endl;\n            cout << \"2. Add a student\" << endl;\n            cin >> action;\n            if(action < 1 || action > 2)\n            {\n                cout << \"Sorry, you must enter a number between 1 and 2.\" << endl;\n            }\n        }","startRow":19,"startColumn":2,"endRow":30,"endColumn":9}],"imageURLs":[],"videoURLs":[],"audioURLs":[],"linesAbove":0,"linesBelow":0,"currentFilePath":"/main.cpp","viewableBlogText":"        int action = 0;\n        while (action < 1 || action > 2)\n        {\n            cout << \"Please select from the following actions:\" << endl;\n            cout << \"1. Remove a student\" << endl;\n            cout << \"2. Add a student\" << endl;\n            cin >> action;\n            if(action < 1 || action > 2)\n            {\n                cout << \"Sorry, you must enter a number between 1 and 2.\" << endl;\n            }\n        }","commentTags":[],"questionCommentData":null}],"762a65d4-2ed1-4971-84d0-2749f65ae9ce":[{"id":"5489d920-589d-4b3c-8ac7-25a1b889f0ab","displayCommentEventId":"762a65d4-2ed1-4971-84d0-2749f65ae9ce","displayCommentEventSequenceNumber":1873,"developerGroupId":"e463fb4f-b490-4318-b425-a23e16f565a7","timestamp":1696600797215,"commentText":"First, consider removing a student from the roster, prompting the user to enter the name of the student to remove from the vector.<div><br></div><div>Note that while we expect the user to enter a name of someone in the class, it is possible that for some reason (e.g. misspelling, typo, etc.) the user enters the name of a student to remove from the roster who does <span style=\"font-weight: bold;\">not</span> appear in our vector.&nbsp; For this reason, we've created a boolean variable called <span style=\"font-family: Courier;\">student_found</span> that keeps track of whether or not we've located the student.&nbsp; by default, we assume we have not found the student.&nbsp; We then change the value of <span style=\"font-family: Courier;\">student_found</span> to true in the event that the name entered by the user is an exact match for some student on the roster.&nbsp; In that situation, we also keep track of the index associated with that student in the <span style=\"font-family: Courier;\">position</span> variable.</div>","commentTitle":"","position":0,"selectedCodeBlocks":[{"fileId":"3d8c292d-70d4-4b9a-83ca-7a0f94f427b1","selectedText":"            int position = 0;\n            bool student_found = false;\n            for(int i = 0; i < roster.size();i++)\n            {\n                if(removal == roster[i])\n                {\n                    position = i;\n                    student_found = true;\n                }","startRow":38,"startColumn":0,"endRow":46,"endColumn":17}],"imageURLs":[],"videoURLs":[],"audioURLs":[],"linesAbove":6,"linesBelow":2,"currentFilePath":"/main.cpp","viewableBlogText":"        if(action == 1)\n        {\n            string removal = \"\";\n            cout << \"Please enter the name of the student to remove from the roster:\";\n            cin >> removal;\n\n            int position = 0;\n            bool student_found = false;\n            for(int i = 0; i < roster.size();i++)\n            {\n                if(removal == roster[i])\n                {\n                    position = i;\n                    student_found = true;\n                }\n            }\n        }","commentTags":[],"questionCommentData":null}],"991449ab-6f85-4a67-b00f-9c7796d5a7f8":[{"id":"e4a71109-0f35-4143-8512-672a2686acf9","displayCommentEventId":"991449ab-6f85-4a67-b00f-9c7796d5a7f8","displayCommentEventSequenceNumber":2016,"developerGroupId":"e463fb4f-b490-4318-b425-a23e16f565a7","timestamp":1696680698245,"commentText":"There are two vector methods being used here:<div>&nbsp; &nbsp; &nbsp;1) <span style=\"font-family: Courier;\">.begin()</span></div><div>&nbsp; &nbsp; &nbsp;2)<span style=\"font-family: Courier;\"> .erase()</span></div><div><span style=\"font-family: Courier;\"><br></span></div><div>The <span style=\"font-family: Courier;\">.begin()</span> method of a vector gives a reference to the starting location in memory where the vector variables are stored.&nbsp; This is <span style=\"font-weight: bold;\">not</span> the same thing as the index of 0, which holds the first value in the vector.&nbsp; It is true, however, that when we add some number <span style=\"font-style: italic;\">n</span> to the value returned by a vector's<span style=\"font-family: Courier;\"> .begin()</span> method that it will hold the location in memory of the vector's <span style=\"font-style: italic;\">n</span>th value (should such a value exist).</div><div><br></div><div>The <span style=\"font-family: Courier;\">.erase()</span> method takes as an argument a location in memory for which we wish to erase the contents.&nbsp; The value assigned to this memory location will be erased, but then the subsequent values in the vector will all be shifted to maintain order in the vector / make sure there are no gaps.&nbsp; The image below shows what happens if the user of our program removes the student Alex from the roster.&nbsp; Notice how the indices of all students alphabetically after Alex have shifted following the <span style=\"font-family: Courier;\">roster.erase()</span> method is called, while the indices of those that came before Alex have not changed.</div>","commentTitle":"","position":0,"selectedCodeBlocks":[{"fileId":"3d8c292d-70d4-4b9a-83ca-7a0f94f427b1","selectedText":"            if(student_found)\n            {\n                roster.erase(roster.begin()+position);\n            }","startRow":48,"startColumn":0,"endRow":51,"endColumn":13}],"imageURLs":["media/images/1696680536846-VectorBegin.png"],"videoURLs":[],"audioURLs":[],"linesAbove":0,"linesBelow":0,"currentFilePath":"/main.cpp","viewableBlogText":"            if(student_found)\n            {\n                roster.erase(roster.begin()+position);\n            }","commentTags":["image"],"questionCommentData":null}],"c92293cc-2543-4ac4-8535-3de272168da8":[{"id":"79925fb3-ccd9-4bf2-9e5a-f791af1fd087","displayCommentEventId":"c92293cc-2543-4ac4-8535-3de272168da8","displayCommentEventSequenceNumber":2246,"developerGroupId":"e463fb4f-b490-4318-b425-a23e16f565a7","timestamp":1696681242204,"commentText":"This second case is if the user wishes to add a student to the roster.&nbsp; We could have left this case as <span style=\"font-family: Courier;\">else</span>, since we have performed data validation earlier to ensure the user does not enter any value other than 1 or 2.&nbsp; However, we chose to code this as an <span style=\"font-family: Courier;\">else if</span> statement for 2 reasons:<div>1) If we wish someday to expand our menu to allow more options, we will not need to recode here.</div><div>2) It is a good programming practice to have an <span style=\"font-family: Courier;\">else</span> statement even if you think you will never reach it.&nbsp; In this case, you can simply include an <span style=\"font-family: Courier;\">else cout &lt;&lt;\"Error, code should not reach this point.\";</span> statement.&nbsp; This helps with debugging as programs grow.</div><div><br></div><div>I also originally named the student to be added as <span style=\"font-family: Courier;\">new_student</span>, which is perhaps a fine variable name.&nbsp; I chose to change the name of the variable to <span style=\"font-family: Courier;\">addition</span> to parallel the naming of the student in the other case removal for a stylistic consistency.</div><div><br></div>","commentTitle":"","position":0,"selectedCodeBlocks":[],"imageURLs":["media/images/1696681236498-varNames.png"],"videoURLs":[],"audioURLs":[],"linesAbove":0,"linesBelow":0,"currentFilePath":"/main.cpp","viewableBlogText":"","commentTags":["image"],"questionCommentData":null}],"3210d869-13ba-4b2d-b524-b9c2b0da0437":[{"id":"11a7ca3b-1473-4c9e-a343-70e85f8406b7","displayCommentEventId":"3210d869-13ba-4b2d-b524-b9c2b0da0437","displayCommentEventSequenceNumber":2395,"developerGroupId":"e463fb4f-b490-4318-b425-a23e16f565a7","timestamp":1696681561963,"commentText":"Our goal is to add the student entered by the user where it belongs alphabetically in the list.&nbsp; To do this, we will step through all currently existing names in the roster and find the position of the first name in the roster that comes alphabetically after the name entered by the user.&nbsp; One special case we must consider, however, is the case that no name on the current roster comes alphabetically after the name entered by the user.&nbsp; This means the proper position for the addition is at the end of the list, so this is the default value chosen for the <span style=\"font-family: Courier;\">position</span> variable.","commentTitle":"","position":0,"selectedCodeBlocks":[{"fileId":"3d8c292d-70d4-4b9a-83ca-7a0f94f427b1","selectedText":"  int position = roster.size();","startRow":59,"startColumn":10,"endRow":59,"endColumn":41}],"imageURLs":[],"videoURLs":[],"audioURLs":[],"linesAbove":6,"linesBelow":0,"currentFilePath":"/main.cpp","viewableBlogText":"        //code to add a student to the roster\n        else if (action == 2)\n        {\n            string addition = \"\";\n            cout << \"Please enter the name of the student to be added:\";\n            cin >> addition;\n            int position = roster.size();","commentTags":[],"questionCommentData":null}],"7026d3f1-ce55-4ba7-8af6-13cc356842a2":[{"id":"b8184ccb-94ed-40c7-9f78-3b34a284eb70","displayCommentEventId":"7026d3f1-ce55-4ba7-8af6-13cc356842a2","displayCommentEventSequenceNumber":2620,"developerGroupId":"e463fb4f-b490-4318-b425-a23e16f565a7","timestamp":1696682166269,"commentText":"","commentTitle":"","position":0,"selectedCodeBlocks":[{"fileId":"3d8c292d-70d4-4b9a-83ca-7a0f94f427b1","selectedText":"            for (int i = 0; i < roster.size();i++)\n            {\n                if (addition < roster[i])\n                {\n                    position = i;\n                    break;\n                }","startRow":60,"startColumn":0,"endRow":66,"endColumn":17}],"imageURLs":[],"videoURLs":[],"audioURLs":[],"linesAbove":6,"linesBelow":2,"currentFilePath":"/main.cpp","viewableBlogText":"        else if (action == 2)\n        {\n            string addition = \"\";\n            cout << \"Please enter the name of the student to be added:\";\n            cin >> addition;\n            int position = roster.size();\n            for (int i = 0; i < roster.size();i++)\n            {\n                if (addition < roster[i])\n                {\n                    position = i;\n                    break;\n                }\n            }\n        }","commentTags":["question"],"questionCommentData":{"allAnswers":["To save time","Because if line 63 evaluates to true and the list is alphabetically ordered, all subsequent i values would also lead to line 63 evaluating to true","Because otherwise we might step off the end of our vector","It isn't "],"correctAnswer":"Because if line 63 evaluates to true and the list is alphabetically ordered, all subsequent i values would also lead to line 63 evaluating to true","question":"Why is the break statement in line 66 necessary?","explanation":"If our <span style=\"font-family: Courier;\">roster </span>was [\"apples\",\"kiwis\",\"oranges\"] and our user entered \"bananas\", line 63 would evaluate to <span style=\"font-family: Courier;\">true</span> at \"kiwis\" and we would want <span style=\"font-family: Courier;\">position</span> to be 1.&nbsp; If we continued looping, however, it would also be true that \"bananas\" &lt; \"oranges\", so we would re-enter the block of code and reset <span style=\"font-family: Courier;\">position</span> to be 2, contrary to our desires."}}],"6e4b029a-454f-48e5-be53-86b03e374181":[{"id":"11ab71fd-05af-461d-81ed-7e5840e05523","displayCommentEventId":"6e4b029a-454f-48e5-be53-86b03e374181","displayCommentEventSequenceNumber":2683,"developerGroupId":"e463fb4f-b490-4318-b425-a23e16f565a7","timestamp":1696682492322,"commentText":"A vector's <span style=\"font-family: Courier;\">.insert()</span> method takes two arguments:<div>1) The location in memory at which to add an element</div><div>2) The value to be inserted in that position.<br><br></div><div>The subsequent values in the vector will all be shifted to maintain order after the addition, leaving the current position available for assigning the value to be inserted without loss of other values.&nbsp; The image below shows what happens if the user of our program adds the student Barbara to the roster.&nbsp; Notice how the indices of all students alphabetically after Barbara have shifted following the <span style=\"font-family: Courier;\">roster.insert()</span> method is called, while the indices of those that came before Barbara have not changed.<br></div>","commentTitle":"","position":0,"selectedCodeBlocks":[{"fileId":"3d8c292d-70d4-4b9a-83ca-7a0f94f427b1","selectedText":"            roster.insert(roster.begin()+position,addition);","startRow":68,"startColumn":0,"endRow":68,"endColumn":60}],"imageURLs":["media/images/1696682447781-VectorInsert.png"],"videoURLs":[],"audioURLs":[],"linesAbove":12,"linesBelow":1,"currentFilePath":"/main.cpp","viewableBlogText":"            string addition = \"\";\n            cout << \"Please enter the name of the student to be added:\";\n            cin >> addition;\n            int position = roster.size();\n            for (int i = 0; i < roster.size();i++)\n            {\n                if (addition < roster[i])\n                {\n                    position = i;\n                    break;\n                }\n            }\n            roster.insert(roster.begin()+position,addition);\n        }","commentTags":["image"],"questionCommentData":null}],"54672f68-fe47-4523-bb9a-13704c9a7a92":[{"id":"3096e559-9f8f-4bcc-aad1-e5cff00743f3","displayCommentEventId":"54672f68-fe47-4523-bb9a-13704c9a7a92","displayCommentEventSequenceNumber":2968,"developerGroupId":"e463fb4f-b490-4318-b425-a23e16f565a7","timestamp":1696683108609,"commentText":"Below is a screenshot of the class roster after a few additions and removals.&nbsp; First, we add the students \"Kaleigh\", \"Aaron\", and \"Zelda\" (checking that our code works for additions at the beginning, middle, and end of the roster as we would expect).&nbsp; Then, we remove the student \"Alex\".","commentTitle":"","position":0,"selectedCodeBlocks":[],"imageURLs":["media/images/1696683089405-VectorChanges.png"],"videoURLs":[],"audioURLs":[],"linesAbove":0,"linesBelow":0,"currentFilePath":"/main.cpp","viewableBlogText":"","commentTags":["image"],"questionCommentData":null}],"7c07418d-091b-4b86-b85b-f9479aa05617":[{"id":"e17e3d55-33ff-45a7-a6dd-8f2b14676940","displayCommentEventId":"7c07418d-091b-4b86-b85b-f9479aa05617","displayCommentEventSequenceNumber":3132,"developerGroupId":"e463fb4f-b490-4318-b425-a23e16f565a7","timestamp":1696683232113,"commentText":"Since when removing students there are two cases (the student was found in the roster or not) and our original code only did something in the case the student was found on the roster, we've added an action for if the student entered by the user is <span style=\"font-style: italic;\">not</span> found on the roster.&nbsp; In this case, we take no action, but inform the user of exactly what happened.","commentTitle":"","position":0,"selectedCodeBlocks":[],"imageURLs":[],"videoURLs":[],"audioURLs":[],"linesAbove":0,"linesBelow":0,"currentFilePath":"/main.cpp","viewableBlogText":"","commentTags":[],"questionCommentData":null}]};
    playbackData.numEvents = 5922;
    playbackData.isEditable = false;
    playbackData.developers = {"67c43ffc-6789-44fb-9aaa-13ac5d6ec50a":{"id":"67c43ffc-6789-44fb-9aaa-13ac5d6ec50a","userName":"Storyteller System","email":"no-email","avatarURL":""},"a54bb050-cce2-47d5-b603-33a73fbb7f79":{"id":"a54bb050-cce2-47d5-b603-33a73fbb7f79","userName":"Anonymous System","email":"no-email","avatarURL":""},"7fe259db-2a45-42aa-aca8-6e58963a5ff4":{"id":"7fe259db-2a45-42aa-aca8-6e58963a5ff4","userName":"Sara Jensen","email":"sjensen1@carthage.edu","avatarURL":"https://www.gravatar.com/avatar/13c199ace3e9c180d7970d28243a2995"}};
    playbackData.developerGroups = {"a9b2c97a-b8bf-47d0-8087-50167cf906be":{"id":"a9b2c97a-b8bf-47d0-8087-50167cf906be","memberIds":["67c43ffc-6789-44fb-9aaa-13ac5d6ec50a"]},"d1348d22-7060-4713-89e9-e301d9c3da13":{"id":"d1348d22-7060-4713-89e9-e301d9c3da13","memberIds":["a54bb050-cce2-47d5-b603-33a73fbb7f79"]},"e463fb4f-b490-4318-b425-a23e16f565a7":{"id":"e463fb4f-b490-4318-b425-a23e16f565a7","memberIds":["7fe259db-2a45-42aa-aca8-6e58963a5ff4"]}};
    playbackData.playbackTitle = 'Vector Methods';
    playbackData.branchId = 'avob5kRA';
    playbackData.estimatedReadTime = 14;
}