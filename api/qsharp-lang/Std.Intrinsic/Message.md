---
uid: Qdk.Std.Intrinsic.Message
title: Message function
description: "Q# Message function: Logs a message."
ms.date: 05/29/2025
qsharp.kind: function
qsharp.package: __Std__
qsharp.namespace: Std.Intrinsic
qsharp.name: Message
qsharp.summary: "Logs a message."
---

# Message function

Fully qualified name: Std.Intrinsic.Message

```qsharp
function Message(msg : String) : Unit
```

## Summary
Logs a message.

## Input
### msg
The message to be reported.

## Remarks
The specific behavior of this function is simulator-dependent,
but in most cases the given message will be written to the console.
```
