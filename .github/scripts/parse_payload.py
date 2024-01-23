import os
import json

def main():
    # Read the custom input from the environment variable
    custom_input = os.environ.get('CUSTOM_INPUT', '{}')

    try:
        # Parse the JSON input
        parsed_input = json.loads(custom_input)

        # Example: Print the parsed JSON
        print(f"Parsed custom input: {parsed_input}")

        for key, value in parsed_input.items():
            print(f"Key: {key}, Value: {value}")

    except json.JSONDecodeError:
        print("Error: Custom input is not valid JSON")

if __name__ == "__main__":
    main()
