import * as vscode from 'vscode';

export function activate (context:vscode.ExtensionContext) {
	
	context.subscriptions.push(vscode.commands.registerCommand('l13Bug.action.compareEndOfLine', () => {
		
		vscode.workspace.getConfiguration('l13Bug').update('ignoreEndOfLine', false, true);
		
	}));
	
	context.subscriptions.push(vscode.commands.registerCommand('l13Bug.action.ignoreEndOfLine', () => {
		
		vscode.workspace.getConfiguration('l13Bug').update('ignoreEndOfLine', true, true);
		
	}));
	
	context.subscriptions.push(vscode.commands.registerCommand('l13Bug.action.compareWhitespace', () => {
		
		vscode.workspace.getConfiguration('diffEditor').update('ignoreTrimWhitespace', false, true);
		
	}));
	
	context.subscriptions.push(vscode.commands.registerCommand('l13Bug.action.ignoreWhitespace', () => {
		
		vscode.workspace.getConfiguration('diffEditor').update('ignoreTrimWhitespace', true, true);
		
	}));
	
	vscode.commands.executeCommand('vscode.open', vscode.Uri.file(__filename));
	
}

export function deactivate () {
	
	//
	
}