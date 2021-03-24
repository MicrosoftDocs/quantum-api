---
uid: Microsoft.Quantum.Tests.AssertCodeCorrectsError
title: AssertCodeCorrectsError function
ms.date: 3/24/2021 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: function
qsharp.namespace: Microsoft.Quantum.Tests
qsharp.name: AssertCodeCorrectsError
qsharp.summary: ''
---

# AssertCodeCorrectsError function

Namespace: [Microsoft.Quantum.Tests](xref:Microsoft.Quantum.Tests)

Package: [Microsoft.Quantum.Standard.Tests](https://nuget.org/packages/Microsoft.Quantum.Standard.Tests)




```qsharp
function AssertCodeCorrectsError (code : Microsoft.Quantum.ErrorCorrection.QECC, nLogical : Int, nScratch : Int, fn : Microsoft.Quantum.ErrorCorrection.RecoveryFn) : ((Qubit[] => Unit) => Unit)
```


## Input

### code : [QECC](xref:Microsoft.Quantum.ErrorCorrection.QECC)




### nLogical : [Int](xref:microsoft.quantum.lang-ref.int)




### nScratch : [Int](xref:microsoft.quantum.lang-ref.int)




### fn : [RecoveryFn](xref:Microsoft.Quantum.ErrorCorrection.RecoveryFn)





## Output : [Qubit](xref:microsoft.quantum.lang-ref.qubit)[] => [Unit](xref:microsoft.quantum.lang-ref.unit)  => [Unit](xref:microsoft.quantum.lang-ref.unit) 



## Remarks

This is a function which curries over all but the error to be applied,and does not explicitly refer to qubits in any way.Thus, the result of evaluating this function is an operation that canbe passed to ApplyToEach<(Qubit[] => ())> in order to test a *collection* oferrors in a compact way.