---
uid: Microsoft.Quantum.Intrinsic.Message
title: Message function
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Intrinsic
qsharp.name: Message
qsharp.summary: Logs a message.
---

# Message function

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Intrinsic](xref:Microsoft.Quantum.Intrinsic)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Logs a message.

```qsharp
function Message (msg : String) : Unit
```


## Input

### msg : [String](xref:microsoft.quantum.qsharp.valueliterals#string-literals)

The message to be reported.



## Output : [Unit](xref:microsoft.quantum.qsharp.valueliterals#unit-literal)



## Example

The following causes `"Hello, world!"` to be reported (typically tothe console):```qsharplet name = "world";Message($"Hello, {name}!");```

## Remarks

The specific behavior of this function is simulator-dependent,but in most cases the given message will be written to the console.