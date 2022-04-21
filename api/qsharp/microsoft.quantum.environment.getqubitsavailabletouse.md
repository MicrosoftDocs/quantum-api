---
uid: Microsoft.Quantum.Environment.GetQubitsAvailableToUse
title: GetQubitsAvailableToUse operation
ms.date: 4/21/2022 12:00:00 AM
ms.topic: managed-reference
qsharp.kind: operation
qsharp.namespace: Microsoft.Quantum.Environment
qsharp.name: GetQubitsAvailableToUse
qsharp.summary: >-
  > [!WARNING]

  > GetQubitsAvailableToUse has been deprecated.


  Returns the number of qubits currently available to use.
---

# GetQubitsAvailableToUse operation

Namespace: [Microsoft.Quantum.Environment](xref:Microsoft.Quantum.Environment)

Package: [Microsoft.Quantum.QSharp.Foundation](https://nuget.org/packages/Microsoft.Quantum.QSharp.Foundation)


> [!WARNING]
> GetQubitsAvailableToUse has been deprecated.

Returns the number of qubits currently available to use.

```qsharp
operation GetQubitsAvailableToUse () : Int
```


## Output : [Int](xref:microsoft.quantum.qsharp.valueliterals#int-literals)

The number of qubits that could be allocated in a `using` statement.If the target machine being used does not provide this information, then`-1` is returned.

## Remarks

This operation is no longer supported, and will be removed in a futureversion.

## See Also

- [Microsoft.Quantum.Environment.GetQubitsAvailableToBorrow](xref:Microsoft.Quantum.Environment.GetQubitsAvailableToBorrow)