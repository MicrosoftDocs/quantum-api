---
uid: Microsoft.Quantum.Targeting.TargetInstruction
title: TargetInstruction user defined type
ms.date: 7/28/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: udt
qsharp.namespace: Microsoft.Quantum.Targeting
qsharp.name: TargetInstruction
qsharp.summary: >-
  Compiler-recognized attribute for usage within target-specific packages
  to specify the name of the instruction on the target machine.
---

# TargetInstruction user defined type

> [!WARNING]
> This documentation refers to the Classic QDK, which has been replaced by the Modern QDK.
>
> Please see <https://aka.ms/qdk.api> for the API documentation for the Modern QDK.

Namespace: [Microsoft.Quantum.Targeting](xref:Microsoft.Quantum.Targeting)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Compiler-recognized attribute for usage within target-specific packagesto specify the name of the instruction on the target machine.

```qsharp

@ Microsoft.Quantum.Core.Attribute()
newtype TargetInstruction = (String);
```

