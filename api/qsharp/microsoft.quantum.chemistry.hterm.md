---
uid: Microsoft.Quantum.Chemistry.HTerm
title: HTerm user defined type
ms.date: 09/13/2023
ms.topic: managed-reference
ms.author: quantumdocwriters
description: >-
  Format of data passed from C# to Q# to represent a term of the Hamiltonian.
  The meaning of the data represented is determined by the algorithm that receives it.
qsharp.kind: udt
qsharp.namespace: Microsoft.Quantum.Chemistry
qsharp.name: HTerm
qsharp.summary: >-
  Format of data passed from C# to Q# to represent a term of the Hamiltonian.
  The meaning of the data represented is determined by the algorithm that receives it.
---

# HTerm user defined type

Namespace: [Microsoft.Quantum.Chemistry](xref:Microsoft.Quantum.Chemistry)

Package: [Microsoft.Quantum.Chemistry](https://nuget.org/packages/Microsoft.Quantum.Chemistry)


Format of data passed from C# to Q# to represent a term of the Hamiltonian.The meaning of the data represented is determined by the algorithm that receives it.

```qsharp

newtype HTerm = (Int[], Double[]);
```

