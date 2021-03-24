---
uid: Microsoft.Quantum.Chemistry.Samples.OptimizedTrotterEstimateEnergy
title: OptimizedTrotterEstimateEnergy operation
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Chemistry.Samples
qsharp.name: OptimizedTrotterEstimateEnergy
qsharp.summary: >-
  We can now use Canon's phase estimation algorithms to
  learn the ground state energy using the above simulation.
---

# OptimizedTrotterEstimateEnergy operation

Namespace: [Microsoft.Quantum.Chemistry.Samples](xref:Microsoft.Quantum.Chemistry.Samples)

Package: [2-RunSimulation](https://nuget.org/packages/2-RunSimulation)


We can now use Canon's phase estimation algorithms tolearn the ground state energy using the above simulation.

```qsharp
operation OptimizedTrotterEstimateEnergy (qSharpData : Microsoft.Quantum.Chemistry.JordanWigner.JordanWignerEncodingData, nBitsPrecision : Int, trotterStepSize : Double) : (Double, Double)
```


## Input

### qSharpData : [JordanWignerEncodingData](xref:Microsoft.Quantum.Chemistry.JordanWigner.JordanWignerEncodingData)




### nBitsPrecision : [Int](xref:microsoft.quantum.lang-ref.int)




### trotterStepSize : [Double](xref:microsoft.quantum.lang-ref.double)





## Output : ([Double](xref:microsoft.quantum.lang-ref.double),[Double](xref:microsoft.quantum.lang-ref.double))

