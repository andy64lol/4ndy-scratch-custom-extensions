# FourndyPagesExtension Documentation

## Overview

The `FourndyPagesExtension` is a Scratch extension designed to manage and interact with web pages through custom blocks. It provides functionality to open web pages, validate URLs, manage browsing history, and perform actions with a delay or randomization.

## Features

- Open web pages in a new tab or the current tab.
- Validate URLs based on format or protocol.
- Manage browsing history with options to view, clear, or revisit pages.
- Perform actions with a customizable delay.
- Open random pages from a predefined list.

---

## API Reference

### 1. **Blocks**

#### **Command Blocks**

1. **Open page [URL] in new tab**
   - **Description**: Opens the specified URL in a new browser tab.
   - **Arguments**:
     - `URL` (string): The URL to open. Default: `https://www.example.com`.

2. **Open page [URL] in current tab**
   - **Description**: Opens the specified URL in the current browser tab.
   - **Arguments**:
     - `URL` (string): The URL to open. Default: `https://www.example.com`.

3. **Open page [URL] in new tab after [DELAY] seconds**
   - **Description**: Opens the specified URL in a new tab after a delay.
   - **Arguments**:
     - `URL` (string): The URL to open. Default: `https://www.example.com`.
     - `DELAY` (number): Delay in seconds. Default: `3`.

4. **Open a random page from the list**
   - **Description**: Opens a randomly selected page from a predefined list.

5. **Open last visited page**
   - **Description**: Opens the most recently visited page from the history.

6. **Add [URL] to history**
   - **Description**: Adds the specified URL to the browsing history.
   - **Arguments**:
     - `URL` (string): The URL to add. Default: `https://www.example.com`.

7. **Clear browsing history**
   - **Description**: Clears all entries from the browsing history.

8. **Display search history on a new page**
   - **Description**: Displays the browsing history on a newly generated page.

#### **Boolean Blocks**

1. **Is [URL] a valid URL?**
   - **Description**: Checks if the provided URL has a valid format.
   - **Arguments**:
     - `URL` (string): The URL to validate. Default: `https://www.example.com`.

2. **Does [URL] start with "http"?**
   - **Description**: Checks if the provided URL starts with "http".
   - **Arguments**:
     - `URL` (string): The URL to validate. Default: `https://www.example.com`.

3. **Is [URL] entrusted with "https"?**
   - **Description**: Checks if the provided URL starts with "https".
   - **Arguments**:
     - `URL` (string): The URL to validate. Default: `https://www.example.com`.

4. **Does [URL] contain a domain name?**
   - **Description**: Checks if the provided URL contains a valid domain name.
   - **Arguments**:
     - `URL` (string): The URL to validate. Default: `https://www.example.com`.

---

### 2. **Internal Methods**

1. **`addToHistory(args)`**
   - Adds a URL and the current timestamp to the history list.

2. **`openHistory()`**
   - Opens the last visited page from the history list.

3. **`clearHistory()`**
   - Clears all browsing history.

4. **`displayHistory()`**
   - Creates and displays a new page showing the browsing history.

5. **`openRandomPage()`**
   - Opens a random URL from a predefined list.

---

## Usage Notes

- History management limits the list to the 10 most recent entries.
- URL validation is based on regular expressions for general format and protocol checks.
- Default URLs are placeholders and can be customized per use case.
- The extension supports both HTTP and HTTPS protocols but prioritizes HTTPS for security.

---

## Example Use Cases

- **Educational Projects**: Use the extension to teach students about URLs, protocols, and the basics of web browsing.
- **Interactive Storytelling**: Combine the random page opener and delay features to create an engaging narrative.
- **Automation**: Automate page openings with specific time delays or predefined sequences.

---

## Limitations

- The `openPageInCurrentTab` function will navigate away from the Scratch platform.
- The browsing history display feature is constrained by browser capabilities and security policies.

---

## Contact

For further assistance or feature requests, please reach out to the developer.
