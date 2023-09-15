---
uid: Microsoft.Quantum.ErrorCorrection.CSS
title: CSS user defined type
ms.date: 09/15/2023
ms.topic: managed-reference
ms.author: quantumdocwriters
description: >-
  Represents a Calderbank–Shor–Steane (CSS) code as defined by
  its encoder, decoder, and its syndrome measurement procedures
  for `X` and `Z` errors, respectively.
qsharp.kind: udt
qsharp.namespace: Microsoft.Quantum.ErrorCorrection
qsharp.name: CSS
qsharp.summary: >-
  Represents a Calderbank–Shor–Steane (CSS) code as defined by
  its encoder, decoder, and its syndrome measurement procedures
  for `X` and `Z` errors, respectively.
---

# CSS user defined type

Namespace: [Microsoft.Quantum.ErrorCorrection](xref:Microsoft.Quantum.ErrorCorrection)

Package: [Microsoft.Quantum.Standard](https://nuget.org/packages/Microsoft.Quantum.Standard)


Represents a Calderbank–Shor–Steane (CSS) code as defined byits encoder, decoder, and its syndrome measurement proceduresfor `X` and `Z` errors, respectively.

```qsharp

newtype CSS = (Microsoft.Quantum.ErrorCorrection.EncodeOp, Microsoft.Quantum.ErrorCorrection.DecodeOp, Microsoft.Quantum.ErrorCorrection.SyndromeMeasOp, Microsoft.Quantum.ErrorCorrection.SyndromeMeasOp);
```

