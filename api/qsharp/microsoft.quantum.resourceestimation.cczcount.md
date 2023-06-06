---
uid: Microsoft.Quantum.ResourceEstimation.CczCount
title: CczCount function
ms.date: 6/5/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.ResourceEstimation
qsharp.name: CczCount
qsharp.summary: >-
  Returns a tuple that can be passed to the `AccountForEstimates` operation
  to specify that the number of the CCZ gates is equal to the `amount`.
---

# CczCount function

Namespace: [Microsoft.Quantum.ResourceEstimation](xref:Microsoft.Quantum.ResourceEstimation)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Returns a tuple that can be passed to the `AccountForEstimates` operationto specify that the number of the CCZ gates is equal to the `amount`.

```qsharp
function CczCount (amount : Int) : (Int, Int)
```


## Input

### amount : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)





## Output : ([Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals),[Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals))

