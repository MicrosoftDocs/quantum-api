---
uid: Microsoft.Quantum.Samples.QAOA.CalculatedCost
title: CalculatedCost function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Samples.QAOA
qsharp.name: CalculatedCost
qsharp.summary: Calculate the total cost for the given result.
---

# CalculatedCost function

Namespace: [Microsoft.Quantum.Samples.QAOA](xref:Microsoft.Quantum.Samples.QAOA)

Package: [QAOA](https://nuget.org/packages/QAOA)


Calculate the total cost for the given result.

```qsharp
function CalculatedCost (segmentCosts : Double[], usedSegments : Bool[]) : Double
```


## Input

### segmentCosts : [Double](xref:microsoft.quantum.lang-ref.double)[]

Array of costs per segment


### usedSegments : [Bool](xref:microsoft.quantum.lang-ref.bool)[]

Array of which segments are used



## Output : [Double](xref:microsoft.quantum.lang-ref.double)

## finalCostCalculated cost of given path