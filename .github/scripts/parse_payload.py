import json
import os

def main():
    # Load the event payload
    with open(os.environ['GITHUB_EVENT_PATH'], 'r') as file:
        event_payload = json.load(file)
    
    # Parse the payload (example: print the commit messages)
    for commit in event_payload['commits']:
        print(f"Commit message: {commit['message']}")

if __name__ == "__main__":
    main()
