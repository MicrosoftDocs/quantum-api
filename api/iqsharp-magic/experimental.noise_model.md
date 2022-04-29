---
title: '%experimental.noise_model (magic command)'
description: Gets, sets, saves, or loads a noise model used in simulating quantum
  operations.
author: anjbur
uid: microsoft.quantum.iqsharp.magic-ref.experimental.noise_model
ms.author: anburton
ms.date: 04/28/2022
ms.topic: managed-reference
---

<!--
    NB: This file has been automatically generated from Microsoft.Quantum.IQSharp.Jupyter.dll,
        please do not manually edit it.

    [DEBUG] JSON source:
        {"Name": "%experimental.noise_model", "Documentation": {"Summary": "Gets, sets, saves, or loads a noise model used in simulating quantum operations.", "Full": null, "Description": "\r\n> **\u26a0 WARNING:** This magic command is **experimental**,\r\n> is not supported, and may be removed from future versions without notice.\r\n\r\nThis magic command allows accessing or modifying the noise model used by\r\nthe `%experimental.simulate_noise` magic command.\r\n                ", "Remarks": null, "Examples": ["\r\nReturn the currently set noise model:\r\n```\r\nIn []: %experimental.noise_model\r\n```\r\n                    ", "\r\n                        Return the built-in noise model with a given name:\r\n                        ```\r\n                        In []: %experimental.noise_model --get-by-name ideal\r\n                        ```\r\n                    ", "\r\nSets the noise model to a built-in named noise model:\r\n```\r\nIn []: %experimental.noise_model --load-by-name ideal_stabilizer\r\n```\r\n                    ", "\r\nSet the noise model to a noise model given as JSON:\r\n```\r\nIn []: %experimental.noise_model { ... }\r\n```\r\n                    ", "\r\nSave the current noise model to a JSON file named\r\n`noise-model.json`:\r\n```\r\nIn []: %experimental.noise_model --save noise-model.json\r\n```\r\n                    ", "\r\nLoad the noise model stored in `noise-model.json`,\r\nmaking it the active noise model:\r\n```\r\nIn []: %experimental.noise_model --load noise-model.json\r\n```\r\n                    "], "SeeAlso": null}, "AssemblyName": "Microsoft.Quantum.IQSharp.Jupyter"}
-->

# `%experimental.noise_model`

## Summary

Gets, sets, saves, or loads a noise model used in simulating quantum operations.

## Description

> **⚠ WARNING:** This magic command is **experimental**,
> is not supported, and may be removed from future versions without notice.

This magic command allows accessing or modifying the noise model used by
the `%experimental.simulate_noise` magic command.

## Examples for `%experimental.noise_model`

### Example 1

Return the currently set noise model:
```
In []: %experimental.noise_model
```

### Example 2

Return the built-in noise model with a given name:
                        ```
                        In []: %experimental.noise_model --get-by-name ideal
                        ```

### Example 3

Sets the noise model to a built-in named noise model:
```
In []: %experimental.noise_model --load-by-name ideal_stabilizer
```

### Example 4

Set the noise model to a noise model given as JSON:
```
In []: %experimental.noise_model { ... }
```

### Example 5

Save the current noise model to a JSON file named
`noise-model.json`:
```
In []: %experimental.noise_model --save noise-model.json
```

### Example 6

Load the noise model stored in `noise-model.json`,
making it the active noise model:
```
In []: %experimental.noise_model --load noise-model.json
```
