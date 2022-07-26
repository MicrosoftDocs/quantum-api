---
uid: Microsoft.Quantum.MachineLearning.FeatureRegisterSize
title: FeatureRegisterSize function
ms.date: 7/23/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.MachineLearning
qsharp.name: FeatureRegisterSize
qsharp.summary: >-
  Returns the number of qubits required to encode a particular feature
  vector.
---

# FeatureRegisterSize function

Namespace: [Microsoft.Quantum.MachineLearning](xref:Microsoft.Quantum.MachineLearning)

Package: [Microsoft.Quantum.MachineLearning](https://nuget.org/packages/Microsoft.Quantum.MachineLearning)


Returns the number of qubits required to encode a particular featurevector.

```qsharp
function FeatureRegisterSize (sample : Double[]) : Int
```


## Input

### sample : [Double](xref:microsoft.quantum.qsharp.valueliterals#double-literals)[]

A sample feature vector to be encoded into a qubit register.



## Output : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The size required to encode `sample` into a qubit register, expressedas a number of qubits.