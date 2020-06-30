var obj;
var lists = { };
var categories = {
	"startList": ["add","addremove","bookmarks","branch","branches","cat","clone","commit","config","diff","forget","heads","help","identify","incoming","init","locate","log","manifest","merge","outgoing","parents","paths","pull","push","recover","remove","revert","root","status","update","verify","version"]
};
var options = {
	"add": {
		"1": "Add All Files, Directories",
		"2": "Add Specific File"
	},
	"addremove": {
		"3": "Add new files and remove missing files.",
		"4": "Identify renamed files, with similarity option"
	},
	"bookmarks": {
		"5": "Create an active bookmark for current changeset",
		"6": "Create an inactive bookmark for current changeset",
		"7": "Create a bookmark for another changeset",
		"8": "Rename a bookmark",
		"9": "List all bookmarks"
	},
	"branch": {
		"10": "Giva a changeset a branch name",
		"11": "Giva a changeset a branch name that already exisit",
		"12": "To reset the WD branch to parent negating previous branch change",
		"13": "List all branches"
	},
	"cat": {
		"14": "Display file contents"
	},

	"clone": {
		"15": "To make a copy of an existing repository",
		"16": "Clone a particular branch of a repository"
	},
	"commit": {
		"17": "Store all changes/additions in local repository",
		"18": "Commiting a pattern of files",
		"19": "Exclude a pattern of files",
		"20": "Close a branch using commit"
	},
	"config": {
		"21": "Display all config settings"
	},
	"diff": {
		"22": "Difference between preivous commit and current WD",
		"23": "Compare a particular file to its parent Changeset"
	},
	"forget": {
		"24": "Forget specified files on next commit",
		"25": "Add files to be ignored during commit in hgignore"
	},
	"heads": {
		"26": "Show Branch heads",
		"27": "Show Branch heads in currently checked out branch",
		"28": "Show branch heads which are closed"
	},
	"help": {
		"29": "Get Mercurial Help and detailed explanations",
		"30": "Help on specific topic"
	},
	"identify": {
		"31": "Find currently workking directory",
		"32": "Store Build ID in .dat file with the working reop"
	},
	"incoming": {
		"33": "Show changes made to the repo by other users",
		"34": "Show changes with patches"
	},
	"init": {
		"35": "create a new repo in the given directory"
	},
	"locate": {
		"36": "Locate a file which matches the given pattern"
	},
	"log": {
		"37": "To show Commit history",
		"38": "Show detailed history",
		"39": "Commits in current branch",
		"40": "Show commits in a particular file",
		"41": "List available log templates",
		"42": "Changesets working in particular line of a file"
	},
	"manifest": {
		"43": "Current project manifest",
		"44": "Particular Manifest using revision"
	},
	"merge": {
		"45": "Merge another changeset into a working directory",
		"46": "To preview the merge"
	},
	"outgoing": {
		"47": "Changesets not present in Destination",
		"48": "compare destination with changed bookmarks",
		"49": "compare destination with changed bookmarks with status"
	},
	"parents": {
		"50": "Show the parent revision of current WD",
		"51": "Show the parent revision of a different revision",
		"52": "Show the parent revision of a particular file"
	},
	"path": {
		"53": "Display default path"
	},
	"pull": {
		"54": "---Not Updated---"
	},
	"push": {
		"55": "---Not Updated---"
	},
	"recover": {
		"56": "Recover from interrupted commit or pull"
	},
	"remove": {
		"57": "Remove file from commit"
	},
	"revert": {
		"58": "Revert to parent branch directory.",
		"59": "Revert to particular revision"
	},
	"root": {
		"60": "Print root directory of current repo"
	},
	"status": {
		"61": "Show all file status in repo",
		"62": "Show file status in repo"
	},
	"update": {
		"63": "Update the working directory"
	},
	"verify": {
		"64": "Verify the integrity of the current repository."
	},
	"version": {
		"65": "Output version and copyright information"
	}
};
var commands = {
	"1": "hg add",
	"2": "hg add 'filename'",
	"3": "hg addremove",
	"4": "hg addremove -s '0&lt;x&lt;100'",
	"5": "hg book 'Bookmark Name'",
	"6": "hg book -i 'Bookmark Name'",
	"7": "hg book -r 'ChangesetID' 'Bookmark Name'",
	"8": "hg book -m 'Old Name' 'New Name'",
	"9": "hg book",
	"10": "hg branch 'Name'",
	"11": "hg branch -f 'Name'",
	"12": "hg branch -C 'Name'",
	"13": "hg branches",
	"14": "hg cat 'File Name'",
	"15": "hg clone 'URL'",
	"16": "hg clone 'URL/branch name'",
	"17": "hg commit -m 'Message'",
	"18": "hg commit --include 'set:**.extension'",
	"19": "hg commit --exclude 'set:**.extension'",
	"20": "hg commit --close-branch",
	"21": "hg config",
	"22": "hg diff",
	"23": "hg diff 'File name'",
	"24": "hg forget 'FileName'",
	"25": "hg forget 'set:hgignore()'",
	"26": "hg heads",
	"27": "hg heads .",
	"28": "hg heads -c",
	"29": "hg help",
	"30": "hg 'Command' --help",
	"31": "hg identify",
	"32": "hg id --id > '.dat file name'",
	"33": "hg incoming",
	"34": "hg in -vp",
	"35": "hg init",
	"36": "hg locate 'Pattern'",
	"37": "hg log",
	"38": "hg log -v",
	"39": "hg log -l 'Log Count' -b",
	"40": "hg log 'File name'",
	"41": "hg log -T list",
	"42": "hg log -L 'File name, Starting Line: Ending line'",
	"43": "hg manifest",
	"44": "hg manifest -r 'Changeset ID'",
	"45": "hg merge -r 'Changeset ID'",
	"46": "hg merge -p  -r 'Changeset ID'",
	"47": "hg outgoing or hg out",
	"48": "hg out -b",
	"49": "hg out -B -v",
	"50": "hg parents",
	"51": "hg parents -r 'Changeset ID'",
	"52": "hg parents 'File name'",
	"53": "hg paths",
	"54": "Yet to be updated",
	"55": "Yet to be updated",
	"56": "hg recover",
	"57": "hg remove 'File name'",
	"58": "hg revert",
	"59": "hg revert -r 'Changeset ID'",
	"60": "hg root",
	"61": "hg status",
	"62": "hg status 'File name'",
	"63": "hg update 'Changeset ID'",
	"64": "hg verify",
	"65": "hg version"
};

function displayCommand(request){
	console.log(request);
	var id = Object.keys(obj).find(key => obj[key] === request);
	var div = document.getElementById('command');
	div.innerHTML = commands[id];
}

function fillSelect(currentCategoryName, currentListName){
	var category;
	if(!(currentCategoryName === 'startList')){
		var div = document.getElementById('command');
		div.innerHTML = '';
		category = options[currentCategoryName];
	}
	else{
		category = categories[currentCategoryName];
	}
	obj = category;
	if (category) {
		var select = lists[currentListName];
		if (select) {
			for (var i = select.options.length-1; i>=0; i--)
				select.remove(i);
			var datafirst = select.getAttribute("data-first");
			if (datafirst == "blank") {
				var opt = document.createElement('option');
				opt.value = "";
				opt.text = "";
				select.add(opt);
			}	
			for (var j in category) {
				var opt = document.createElement('option');
				opt.value = category[j];
				opt.text = category[j];
				select.add(opt);
			}
		}
	}
}

function init() { 
	var selects = document.forms[0].getElementsByTagName("select");
	for (var i in selects) {
		lists[selects[i].id] = selects[i];
	}
	fillSelect('startList', 'list');
}

if (window.attachEvent) 
	window.attachEvent('onload', init, false);
else
	window.addEventListener('load', init, false);