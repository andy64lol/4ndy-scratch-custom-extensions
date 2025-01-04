# 4ndy Filters Extension Documentation

## Overview

The **4ndy Filters** extension is designed to help filter offensive language from messages. By using this extension, users can ensure that any undesirable language in a message is replaced with asterisks (`****`), promoting a cleaner environment in their projects.

## Block

### `filterMessage [MESSAGE]`

This block accepts a text input (`MESSAGE`) and scans it for predefined offensive words. If any of these words are found in the message, they are replaced with `****` before returning the cleaned message.

### Parameters:
- `MESSAGE` (String): The input text that needs to be filtered.

### Output:
- A string where offensive words are replaced by `****`.

## How It Works

The `filterMessage` block works by checking the provided message against a predefined list of offensive words. If any of these words are present in the message, they are replaced with `****`. 

Currently, the list of offensive words is fixed and cannot be customized by the user. As a result, users will need to rely on the default list for filtering.

## Limitations

- The list of offensive words is hardcoded and cannot be modified.
- The block only replaces predefined offensive words with `****` and does not allow for more complex filtering rules.
