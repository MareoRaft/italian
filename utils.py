from sys import version_info
import subprocess

def run(cmd):
	version_minor = version_info[1]
	if version_minor <= 4:
		out_bytes = subprocess.check_output(cmd)
	else:
		out_bytes = subprocess.run(cmd, check=True, stdout=subprocess.PIPE).stdout
	out_str = out_bytes.decode()
	out_clean = out_str.strip()
	return out_clean

def is_server():
	""" detects if we are on the server or not """
	out = run(['uname', '-n'])
	return out == 'fuji'
