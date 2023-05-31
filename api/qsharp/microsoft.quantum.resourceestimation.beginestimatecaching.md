---
uid: Microsoft.Quantum.ResourceEstimation.BeginEstimateCaching
title: BeginEstimateCaching function
ms.date: 5/31/2023 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.ResourceEstimation
qsharp.name: BeginEstimateCaching
qsharp.summary: >-
  Informs the resource estimator of the start of the code fragment
  for which estimates caching can be done. This function
  is only available when using resource estimator execution target.
---

# BeginEstimateCaching function

Namespace: [Microsoft.Quantum.ResourceEstimation](xref:Microsoft.Quantum.ResourceEstimation)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


Informs the resource estimator of the start of the code fragment

```qsharp
function BeginEstimateCaching (name : String, variant : Int) : Bool
```


## Input

### name : [String](xref:microsoft.quantum.qsharp.valueliterals#string-literals)

The name of the code fragment. Used to distinguish it from other code fragments.


### variant : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

Specific variant of the execution. Cached estimates can only be reused if the



## Output : [Bool](xref:microsoft.quantum.qsharp.valueliterals#bool-literals)

`true` indicated that the cached estimates are not yet avialable and the code fragment