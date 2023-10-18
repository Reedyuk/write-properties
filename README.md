![Count of Action Users](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/Reedyuk/write-properties/main/write-properties.json)
# write-properties GitHub Action  

write-properties allows you to write key values to your .properties file on *Any* github platform e.g. MacOS, Linux, Windows

## Integrating with GitHub actions

GitHub actions are a flexible way to automatically build your project.
I have found working on several projects the need to change the version of the .properties file.

## Prerequisites

Make sure that you have

* a GitHub account with Actions enabled
* a project with a .properties file

## Inputs

### `path`

**Required** The path to properties file to read.

### `property`

**Required** The property you want to write.

### `value`

The value of the given property.

**Required** The property you want to write.

## Example usage

    - name: Write value from Properties-file
      id: write_property
      uses: Reedyuk/write-properties@latest
      with:
        path: './src/main/resources/application.properties'
        property: 'the.key.of.the.property'
        value: 'value'
 
